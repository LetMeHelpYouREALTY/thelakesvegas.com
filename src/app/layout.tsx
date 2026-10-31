import "./globals.css";

import React from "react";
import type { Metadata } from "next";
import Script from "next/script";
import { GeistSans } from "geist/font/sans";
import { Analytics } from "@vercel/analytics/react";
import { cn } from "@/lib/utils";
import AIChatWidget from "@/components/chat/AIChatWidget";
import CalendlyBadge from "@/components/calendly/CalendlyBadge";
import SchemaScript from "@/components/SchemaScript";
import {
  generateRealEstateAgentSchema,
  generateWebSiteSchema,
  combineSchemas,
} from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

const title = `${siteConfig.name} | Dr. Jan Duffy, REALTOR® | BHHS Nevada Properties`;
const description = siteConfig.description;
const url = siteConfig.url.replace(/\/$/, "");

const googleVerification = process.env.GOOGLE_SITE_VERIFICATION?.trim();

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${siteConfig.brandLine}`,
  },
  description,
  metadataBase: new URL(url),
  authors: [{ name: "Dr. Jan Duffy", url }],
  keywords: [
    "The Lakes Las Vegas",
    "The Lakes Las Vegas homes for sale",
    "The Lakes real estate",
    "The Lakes homes for sale",
    "West Las Vegas real estate",
    "89128",
    "89129",
    "Clark County NV real estate",
    "Berkshire Hathaway HomeServices",
    "Berkshire Hathaway HomeServices Nevada Properties",
    "Dr. Jan Duffy",
    "Las Vegas real estate",
    "Summerlin area homes",
  ],
  openGraph: {
    title,
    description,
    url,
    siteName: `${siteConfig.name} | ${siteConfig.brandLine}`,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: {
    icon: "/favicon-32x32.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  ...(googleVerification
    ? { verification: { google: googleVerification } }
    : {}),
};

const siteWideSchemas = combineSchemas(
  generateRealEstateAgentSchema(),
  generateWebSiteSchema(),
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth antialiased"
      style={{ colorScheme: "light" }}
    >
      <head>
        <meta name="color-scheme" content="light" />
        <link rel="preconnect" href="https://em.realscout.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.realscout.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://mt.googleapis.com" />
        <SchemaScript schema={siteWideSchemas} id="site-schema" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WB5DLLZ4C6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WB5DLLZ4C6');
          `}
        </Script>
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
          strategy="afterInteractive"
        />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={cn(
          GeistSans.variable,
          "antialiased bg-white text-sm md:text-base text-slate-800",
        )}
      >
        {children}
        <AIChatWidget />
        <CalendlyBadge />
        <Analytics />
        {/* Widget Tracker */}
        {process.env.VERCEL_ENV === "production" && (
          <Script id="widget-tracker" strategy="afterInteractive">{`
          (function(w,i,d,g,e,t){w["WidgetTrackerObject"]=g;(w[g]=w[g]||function()
          {(w[g].q=w[g].q||[]).push(arguments);}),(w[g].ds=1*new Date());(e="script"),
          (t=d.createElement(e)),(e=d.getElementsByTagName(e)[0]);t.async=1;t.src=i;
          e.parentNode.insertBefore(t,e);})
          (window,"https://widgetbe.com/agent",document,"widgetTracker");
          window.widgetTracker("create", "WT-XQHVYQWW");
          window.widgetTracker("send", "pageview");
          `}</Script>
        )}
      </body>
    </html>
  );
}
