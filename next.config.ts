import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const csp = [
  "default-src 'self'",
  [
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
    "https://em.realscout.com",
    "https://www.realscout.com",
    "https://assets.calendly.com",
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
    "https://challenges.cloudflare.com",
    "https://www.instagram.com",
    "https://maps.googleapis.com",
    "https://maps.gstatic.com",
  ].join(" "),
  [
    "style-src 'self' 'unsafe-inline'",
    "https://em.realscout.com",
    "https://www.realscout.com",
    "https://assets.calendly.com",
    "https://fonts.googleapis.com",
  ].join(" "),
  "img-src 'self' data: blob: https: http:",
  [
    "font-src 'self' data:",
    "https://assets.calendly.com",
    "https://fonts.gstatic.com",
  ].join(" "),
  [
    "connect-src 'self'",
    "https://em.realscout.com",
    "https://www.realscout.com",
    "https://api.anthropic.com",
    "https://api.openai.com",
    "https://calendly.com",
    "https://www.google-analytics.com",
    "https://analytics.google.com",
    "https://challenges.cloudflare.com",
    "https://api.followupboss.com",
    "https://www.instagram.com",
    "https://graph.instagram.com",
    "https://maps.googleapis.com",
    "https://maps.gstatic.com",
  ].join(" "),
  [
    "frame-src 'self'",
    "https://em.realscout.com",
    "https://www.realscout.com",
    "https://calendly.com",
    "https://assets.calendly.com",
    "https://www.google.com",
    "https://maps.google.com",
    "https://*.google.com",
    "https://challenges.cloudflare.com",
    "https://www.instagram.com",
    "https://instagram.com",
  ].join(" "),
  "worker-src 'self' blob:",
].join("; ");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: path.join(__dirname),
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy:
      "default-src 'self'; script-src 'none'; sandbox;",
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
