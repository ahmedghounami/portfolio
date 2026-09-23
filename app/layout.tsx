import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ahmedghounami.dev"),
  title: "Ahmed Ghounami — Full-Stack & Systems Software Engineer",
  description:
    "Portfolio of Ahmed Ghounami — Full-Stack & Systems Software Engineer trained at 1337 (42 Network). Specializing in Next.js, React, Node.js, NestJS, Socket.io real-time apps, streaming protocols, and low-level C/C++ architecture.",
  keywords: [
    "Ahmed Ghounami",
    "Software Engineer",
    "Full-Stack Developer",
    "1337 Coding School",
    "42 Network",
    "Next.js",
    "React",
    "TypeScript",
    "NestJS",
    "Node.js",
    "Socket.io",
    "Red Tetris",
    "Hypertube",
    "ft_transcendence",
    "WebServ",
    "React Native",
    "Docker",
    "DevOps",
  ],
  authors: [{ name: "Ahmed Ghounami", url: "https://github.com/ahmedghounami" }],
  creator: "Ahmed Ghounami",
  openGraph: {
    title: "Ahmed Ghounami — Full-Stack & Systems Software Engineer",
    description:
      "Full-Stack & Systems Software Engineer trained at 1337 (42 Network). Explore projects in real-time gaming, BitTorrent streaming, mobile companion apps, and C++ systems.",
    url: "https://ahmedghounami.dev",
    siteName: "Ahmed Ghounami Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Ahmed Ghounami — Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Ghounami — Full-Stack & Systems Software Engineer",
    description:
      "Full-Stack & Systems Software Engineer trained at 1337 (42 Network). Explore projects in real-time gaming, BitTorrent streaming, and C++ systems.",
    images: ["/profile.jpg"],
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050507] text-zinc-100`}
      >
        {children}
      </body>
    </html>
  );
}
