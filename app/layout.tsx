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
      <head>
        {/* Business Schema Markup (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Garages Leeds",
              "description": "Garages Leeds offers secure, affordable lock-up garages to rent in Leeds. Whether you need extra storage space or a safe place to park, we have the perfect solution.",
              "url": "https://www.garagesleeds.co.uk",
              "telephone": "+44 7519 667044",
              "priceRange": "$$",
              "openingHours": "Mo-Su 09:00-18:00", // Adjust as needed
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "80 Aston Terrace",
                "addressLocality": "Leeds",
                "postalCode": "LS13 2EB",
                "addressCountry": "UK"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 53.8075118,
                "longitude": -1.6194430
              },
              "makesOffer": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Lock-up Garage Rentals"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Secure Storage Units"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Workshops with Electricity"
                  }
                }
              ],
      
            })
          }}
        />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
