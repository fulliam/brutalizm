import React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "./components/ThemeProvider"
import CustomCursor from "../components/CustomCursor"
import Navigation from "./components/Navigation"
import ThemeSwitchAnimation from "./components/ThemeSwitchAnimation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Brutal Portfolio | Дизайнер & Разработчик",
    template: "%s | Brutal Portfolio",
  },
  description:
    "Брутальное портфолио креативного дизайнера и разработчика. Современный веб-дизайн с уникальным подходом.",
  keywords: ["портфолио", "дизайн", "разработка", "брутализм", "веб-дизайн"],
  authors: [{ name: "Brutal Designer" }],
  creator: "Brutal Designer",
  publisher: "Brutal Portfolio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://brutal-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://brutal-portfolio.vercel.app",
    title: "Brutal Portfolio | Дизайнер & Разработчик",
    description: "Брутальное портфолио креативного дизайнера и разработчика",
    siteName: "Brutal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brutal Portfolio | Дизайнер & Разработчик",
    description: "Брутальное портфолио креативного дизайнера и разработчика",
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
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&family=Anton&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Brutal Designer",
              jobTitle: "Дизайнер и Разработчик",
              url: "https://brutal-portfolio.vercel.app",
              sameAs: ["https://github.com/brutal-designer", "https://linkedin.com/in/brutal-designer"],
              knowsAbout: ["Веб-дизайн", "UI/UX", "Frontend разработка", "Брутализм"],
              description: "Креативный дизайнер и разработчик, специализирующийся на брутальном веб-дизайне",
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <CustomCursor />
          <Navigation />
          <ThemeSwitchAnimation />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
