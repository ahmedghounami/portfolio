import type { Metadata, Viewport } from "next"
import PortfolioClient from "../components/PortfolioClient"

export const viewport: Viewport = {
  themeColor: "#050507",
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL("https://ahmedghounami.vercel.app"),
  title: {
    default: "Ahmed Ghounami — Full-Stack & Software Engineer",
    template: "%s | Ahmed Ghounami",
  },
  description:
    "Portfolio of Ahmed Ghounami — software engineer specializing in Next.js, React, NestJS, Python, FastAPI, Node.js, and low-level systems (1337 / 42 Network).",
  applicationName: "Ahmed Ghounami Portfolio",
  category: "technology",
  authors: [{ name: "Ahmed Ghounami", url: "https://ahmedghounami.vercel.app" }],
  creator: "Ahmed Ghounami",
  publisher: "Ahmed Ghounami",
  keywords: [
    "Ahmed Ghounami",
    "Full-stack engineer",
    "Software Engineer",
    "React developer",
    "Next.js",
    "NestJS",
    "Fastify",
    "FastAPI",
    "Python",
    "Node.js",
    "React Native",
    "Expo",
    "Xcode",
    "WebSockets",
    "Docker",
    "PostgreSQL",
    "Supabase",
    "Blockchain",
    "Web3",
    "1337",
    "42 Network",
    "Systems Programming",
    "TypeScript",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://ahmedghounami.vercel.app/",
    siteName: "Ahmed Ghounami Portfolio",
    title: "Ahmed Ghounami — Full-Stack & Software Engineer",
    description:
      "Explore software engineering projects, mobile apps, and systems built with Next.js, React, NestJS, FastAPI, and Node.js.",
    locale: "en_US",
    images: [
      {
        url: "https://cdn.intra.42.fr/users/7ec5d8829b0f0d9e26713b331df85178/aghounam.JPG",
        width: 1200,
        height: 630,
        alt: "Ahmed Ghounami — Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Ghounami — Full-Stack & Software Engineer",
    description:
      "Projects, skills, and experience in Next.js, NestJS, Python, FastAPI, React Native, Node.js, and systems software.",
    images: ["https://cdn.intra.42.fr/users/7ec5d8829b0f0d9e26713b331df85178/aghounam.JPG"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
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
  manifest: "/site.webmanifest",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "github:url": "https://github.com/ahmedghounami",
    "linkedin:url": "https://www.linkedin.com/in/ahmed-ghounami-a675b1294/",
  },
}

export default function Page() {
  return <PortfolioClient />
}
