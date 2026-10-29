import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const title = "Ahmed Ghounami — Full-Stack & Systems Engineer";
const description =
  "Full-stack and systems engineer trained at 42 Paris. Creator of Portify, a portfolio builder with twelve animated templates. Next.js, React, TypeScript, Node.js, Supabase, C/C++.";

export const viewport: Viewport = {
  themeColor: "#07070a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ahmedghounami.vercel.app"),
  title: {
    default: title,
    template: "%s | Ahmed Ghounami",
  },
  description,
  applicationName: "Ahmed Ghounami Portfolio",
  category: "technology",
  authors: [{ name: "Ahmed Ghounami", url: "https://github.com/ahmedghounami" }],
  creator: "Ahmed Ghounami",
  keywords: [
    "Ahmed Ghounami",
    "Software Engineer",
    "Full-Stack Developer",
    "Portify",
    "Portfolio builder",
    "Next.js",
    "React",
    "TypeScript",
    "Supabase",
    "NestJS",
    "Node.js",
    "Socket.io",
    "React Native",
    "C++",
    "Docker",
    "42 Paris",
    "1337",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Ahmed Ghounami",
    title,
    description,
    locale: "en_US",
    images: [{ url: "/profile.jpg", width: 1200, height: 630, alt: "Ahmed Ghounami — Software Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased bg-bg text-fg`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
