/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    const rules = [];
    if (process.env.ENABLE_KOALA_PROXY === "true") {
      rules.push(
        { source: "/koala-api/:path*", destination: "https://proxy.getkoala.com/:path*" },
        { source: "/koala-cdn/:path*", destination: "https://cdn.getkoala.com/:path*" },
      );
    }
    return rules;
  },
  async headers() {
    const csp = [];
    // Adjust if you use a more complete CSP elsewhere:
    csp.push({
      source: "/(.*)",
      headers: [
        {
          key: "Content-Security-Policy",
          value: `
            default-src 'self';
            script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.getkoala.com;
            connect-src 'self' https://api.getkoala.com https://proxy.getkoala.com;
            img-src 'self' data: https://cdn.getkoala.com;
            style-src 'self' 'unsafe-inline';
            frame-ancestors 'self';
          `.trim().replace(/\n+/g, " ")
        }
      ]
    });
    return csp;
  },
};

export default nextConfig;
