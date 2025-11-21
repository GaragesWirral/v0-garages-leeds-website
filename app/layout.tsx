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
  metadataBase: new URL('https://www.garagesleeds.co.uk'),
  generator: 'v0.app',
  // Added for indexing: Allows search engines to index and follow links
  robots: 'index, follow',
  // Corrected canonical under alternates to ensure it renders properly
  alternates: {
    canonical: 'https://www.garagesleeds.co.uk/'
  }
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
