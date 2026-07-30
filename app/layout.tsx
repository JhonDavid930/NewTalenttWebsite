import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NewTalentt — Music Strategy, Growth & Technology",
    template: "%s | NewTalentt",
  },
  description:
    "Private, tailored music strategy for artists, labels and ambitious music projects. Strategy. Growth. Technology. Built for music.",
  applicationName: "NewTalentt",
  keywords: [
    "music strategy",
    "artist growth",
    "music marketing",
    "YouTube strategy",
    "release strategy",
    "music technology",
  ],
  authors: [{ name: "NewTalentt" }],
  creator: "NewTalentt",
  publisher: "NewTalentt",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      es: "/es",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "es_ES",
    url: "/",
    siteName: "NewTalentt",
    title: "Your music needs the right strategy.",
    description:
      "A boutique Music Strategy, Growth & Technology partner built for music.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "NewTalentt — Your music needs the right strategy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NewTalentt — Built for music",
    description:
      "Private, tailored strategy for artists, labels and ambitious music projects.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/brand/icon-512.webp",
    shortcut: "/brand/icon-512.webp",
    apple: "/brand/icon-512.webp",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#0C0F18",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
