import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

// <CHANGE> Updated metadata for Garages Leeds SEO
export const metadata: Metadata = {
  title: "Garages to Rent Leeds | Secure Lock-Up Garages & Storage Units",
  description:
    "Garages Leeds offers secure, affordable lock-up garages to rent in Leeds. Whether you need extra storage space or a safe place to park, we have the perfect solution.",
  keywords:
    "garages to rent leeds, lock up garage to rent leeds, garage to rent near me, garages leeds, garages for rent leeds",
  openGraph: {
    title: "Garages to Rent Leeds | Secure Lock-Up Garages & Storage Units",
    description:
      "Garages Leeds offers secure, affordable lock-up garages to rent in Leeds. Whether you need extra storage space or a safe place to park.",
    type: "website",
  },
    generator: 'v0.app'
}

export const robots = {
  index: true,
  follow: true,
  "max-image-preview": "large",
  "max-snippet": -1,
  "max-video-preview": -1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
