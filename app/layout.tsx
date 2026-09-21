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

const siteUrl = "https://www.geeknishant.tech"; // ← apna domain ya vercel URL

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nishant Kumar — AI Developer",
    template: "%s — Nishant Kumar",
  },
  description:
    "AI Developer & Full Stack Engineer building intelligent web apps that solve real problems using code + AI.",
  keywords: [
    "Nishant Kumar",
    "AI Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "SEO Specialist",
    "Frontend Developer",
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
    title: "Nishant Kumar — AI Developer",
    description:
      "AI Developer & Full Stack Engineer building intelligent web apps that solve real problems using code + AI.",
    images: [
      {
        url: "https://www.geeknishant.tech/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nishant Kumar — AI Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nishant Kumar — AI Developer",
    description:
      "AI Developer & Full Stack Engineer building intelligent web apps.",
    images: ["https://www.geeknishant.tech/og-image.png"],
    creator: "@stay_to_kyeus", // ← apna X handle
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