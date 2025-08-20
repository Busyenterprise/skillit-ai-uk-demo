import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SKILLIT-AI | Revolutionary UK Recruitment Platform",
  description:
    "Transform your hiring process with AI-powered candidate matching, live skill auctions, and intelligent recruitment solutions designed for the UK market.",
  keywords: "UK recruitment, AI hiring, skill auctions, candidate matching, recruitment technology, hiring platform",
  authors: [{ name: "SKILLIT-AI Team" }],
  openGraph: {
    title: "SKILLIT-AI | Revolutionary UK Recruitment Platform",
    description: "Transform your hiring process with AI-powered candidate matching and live skill auctions.",
    url: "https://skillit-ai.co.uk",
    siteName: "SKILLIT-AI",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SKILLIT-AI | Revolutionary UK Recruitment Platform",
    description: "Transform your hiring process with AI-powered candidate matching and live skill auctions.",
  },
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
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
