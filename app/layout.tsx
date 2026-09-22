import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

const siteUrl = "https://www.geeknishant.tech";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nishant Kumar — Cybersecurity & Full Stack Developer",
    template: "%s — Nishant Kumar",
  },
  description:
    "Cybersecurity student & Full Stack Developer. I build secure web applications with React, Next.js, Node.js — and explore ethical hacking, penetration testing, and OSINT.",
  keywords: [
    "Nishant Kumar",
    "Cybersecurity",
    "Ethical Hacking",
    "Penetration Testing",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Security Engineer",
    "OSINT",
    "Bug Bounty",
    "Portfolio",
  ],
  authors: [{ name: "Nishant Kumar" }],
  creator: "Nishant Kumar",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Nishant Kumar",
    title: "Nishant Kumar — Cybersecurity & Full Stack Developer",
    description:
      "Cybersecurity student & Full Stack Developer. Building secure web applications and exploring ethical hacking.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Nishant Kumar — Cybersecurity & Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nishant Kumar — Cybersecurity & Full Stack Developer",
    description:
      "Cybersecurity student & Full Stack Developer. Building secure web apps.",
    images: [`${siteUrl}/og-image.png`],
    creator: "@yourhandle", // ← apna X handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <body
        className="bg-black text-neutral-200 antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}