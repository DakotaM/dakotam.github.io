"use client"

import Script from "next/script"

type Props = {
  deferInit?: boolean
  apiKey?: string
}

export default function KoalaScript({ deferInit = false, apiKey }: Props) {
  const useProxy = process.env.ENABLE_KOALA_PROXY === "true"
  const cdnSrc = useProxy ? "/koala-cdn/v1/koala.js" : "https://cdn.getkoala.com/v1/koala.js"

  if (!apiKey) {
    return null
  }

  const initScript = `
!function(k,o,a,l){
  k._koala=k._koala||function(){(k._koala.q=k._koala.q||[]).push(arguments)};
  var s=o.createElement("script");
  s.async=1;s.src="${cdnSrc}";
  var x=o.getElementsByTagName("script")[0];x.parentNode.insertBefore(s,x)
}(window,document);
${useProxy ? `_koala("config", { apiHost: "/koala-api" });` : ""}
${!deferInit ? `_koala("init", { apiKey: "${apiKey}" });` : ""}

// Track page views and send to our webhook
if (!${deferInit} && "${apiKey}") {
  _koala("track", "page_view", {
    page_url: window.location.href,
    page_title: document.title,
    referrer: document.referrer
  });
  
  // Send notification to our webhook
  fetch("/api/koala-webhook", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      type: "visitor",
      event: "page_view",
      page_url: window.location.href,
      page_title: document.title,
      referrer: document.referrer,
      timestamp: new Date().toISOString(),
      visitor: {
        user_agent: navigator.userAgent,
        language: navigator.language
      }
    })
  }).catch(err => console.log("Webhook failed:", err));
}
`

  return <Script id="koala-init" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: initScript }} />
}
