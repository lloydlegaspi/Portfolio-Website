import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { LazyChatWidget } from "@/components/chat/LazyChatWidget";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { StructuredData } from "@/components/seo/StructuredData";
import { profile } from "@/content";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.shortName} | Portfolio`,
    template: `%s | ${profile.shortName}`,
  },
  description: `${profile.shortName}'s portfolio featuring data engineering, analytics, and software development work.`,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    title: `${profile.shortName} | Portfolio`,
    description: profile.introduction,
    siteName: `${profile.shortName} Portfolio`,
    images: [
      {
        url: "/images/projects/portfolio.png",
        width: 1200,
        height: 630,
        alt: `${profile.shortName} portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.shortName} | Portfolio`,
    description: profile.introduction,
    images: ["/images/projects/portfolio.png"],
  },
  icons: {
    icon: "/images/logo/logo-tab.png",
    shortcut: "/images/logo/logo-tab.png",
    apple: "/images/logo/logo-tab.png",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} min-h-screen bg-white font-mont text-neutral-950 antialiased dark:bg-neutral-950 dark:text-neutral-100`}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" className="pt-[65px]">
          {children}
        </main>
        <SiteFooter />
        <LazyChatWidget />
        <StructuredData />
      </body>
    </html>
  );
}
