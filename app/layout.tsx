import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Landmark Logix - Expert Owner's Representative Services",
    template: "%s | Landmark Logix",
  },
  description:
    "Expert owner's representative services for public-facing landmark buildings across the East Coast. 20+ years of excellence in historic preservation, civic architecture, and community-centered construction projects.",
  keywords: [
    "owner's representative",
    "landmark buildings",
    "historic preservation",
    "civic architecture",
    "construction management",
    "East Coast",
    "public buildings",
  ],
  authors: [{ name: "Landmark Logix" }],
  creator: "Landmark Logix",
  publisher: "Landmark Logix",
  metadataBase: new URL("https://landmarklogix.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Landmark Logix - Building Landmarks That Stand the Test of Time",
    description:
      "Expert owner's representative services for public-facing landmark buildings. From historic preservation to modern civic architecture.",
    url: "https://landmarklogix.com",
    siteName: "Landmark Logix",
    images: [
      {
        url: "/images/landmark-logix-og.jpg",
        width: 1200,
        height: 630,
        alt: "Landmark Logix - Historic landmark building with classical architecture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Landmark Logix - Expert Owner's Representative Services",
    description:
      "Building landmarks that stand the test of time. 20+ years of excellence in historic preservation and civic architecture.",
    images: ["/images/landmark-logix-og.jpg"],
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
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
