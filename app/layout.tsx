import type { Metadata } from "next";
import { Fraunces, Dancing_Script, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import {
  generateWebsiteSchema,
  generateOrganizationSchema,
  siteUrl,
  siteName,
  siteDescription,
} from "@/lib/seo";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const dancingScript = Dancing_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Natural Beauty, Gently Made`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "natural skincare",
    "rose water toner",
    "botanical skincare",
    "handmade skincare Kenya",
    "small batch beauty",
    "organic skincare",
    "Marie's Botanicals",
  ],
  authors: [{ name: "Marie's Botanicals" }],
  creator: "Marie's Botanicals",
  publisher: "Marie's Botanicals",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: siteUrl,
    siteName,
    title: `${siteName} | Natural Beauty, Gently Made`,
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/og-image.svg`,
        width: 1200,
        height: 630,
        alt: "Marie's Botanicals - Natural Beauty, Gently Made",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Natural Beauty, Gently Made`,
    description: siteDescription,
    images: [`${siteUrl}/og-image.jpg`],
    creator: "@maries_skincare_products",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <head>
        <JsonLd data={generateWebsiteSchema()} />
        <JsonLd data={generateOrganizationSchema()} />
        <link rel="canonical" href={siteUrl} />
        <link rel="sitemap" href={`${siteUrl}/sitemap.xml`} />
      </head>
      <body
        className={`${fraunces.variable} ${dancingScript.variable} ${inter.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
