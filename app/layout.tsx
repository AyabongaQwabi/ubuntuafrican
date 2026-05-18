import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://ubuntuafrican.qwabi.co.za"),
  title: {
    default: "Ubuntu African Resources | Mineral Trading Company Website",
    template: "%s | Ubuntu African Resources",
  },
  description: "Ubuntu African Resources is a South African mineral trading company focused on sustainable commodities and global trade.",
  keywords: [
    "Ubuntu African Resources",
    "mineral trading South Africa",
    "commodities trading",
    "sustainable minerals",
    "African resources"
],
  authors: [{ name: "Ubuntu African Resources" }],
  creator: "Ubuntu African Resources",
  publisher: "Ubuntu African Resources",
  alternates: {
    canonical: "https://ubuntuafrican.qwabi.co.za",
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: "https://ubuntuafrican.qwabi.co.za",
    siteName: "Ubuntu African Resources",
    title: "Ubuntu African Resources | Mineral Trading Company Website",
    description: "Ubuntu African Resources is a South African mineral trading company focused on sustainable commodities and global trade.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Ubuntu African Resources social preview",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ubuntu African Resources",
    description: "Ubuntu African Resources is a South African mineral trading company focused on sustainable commodities and global trade.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
}

export default function RootLayout({


  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-ZA"><body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
