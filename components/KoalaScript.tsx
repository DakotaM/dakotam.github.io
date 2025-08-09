"use client"

import Script from "next/script"

type Props = {
  deferInit?: boolean
}

export default function KoalaScript({ deferInit = false }: Props) {
  const apiKey = process.env.NEXT_PUBLIC_KOALA_API_KEY
  const useProxy = process.env.ENABLE_KOALA_PROXY === "true"
  const cdnSrc = useProxy ? "/koala-cdn/v1/koala.js" : "https://cdn.getkoala.com/v1/koala.js"

  const initScript = `
!function(k,o,a,l){
  k._koala=k._koala||function(){(k._koala.q=k._koala.q||[]).push(arguments)};
  var s=o.createElement("script");
  s.async=1;s.src="${cdnSrc}";
  var x=o.getElementsByTagName("script")[0];x.parentNode.insertBefore(s,x)
}(window,document);
${useProxy ? `_koala("config", { apiHost: "/koala-api" });` : ""}
${!deferInit ? `_koala("init", { apiKey: "${apiKey ?? ""}" });` : ""}
`

  return <Script id="koala-init" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: initScript }} />
}
