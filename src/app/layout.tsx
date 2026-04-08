import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk'
})

export const metadata: Metadata = {
  title: {
    default: "Adverrize | Digital Marketing & Ads Platform",
    template: "%s | Adverrize",
  },
  description:
    "Adverrize helps businesses grow with Google Ads, Meta Ads, and performance marketing strategies.",
  keywords: [
    "digital marketing",
    "google ads",
    "meta ads",
    "advertising agency",
    "performance marketing India",
  ],
  metadataBase: new URL("https://www.adverrize.in"),

  openGraph: {
    title: "Adverrize",
    description: "We Turn Clicks Into Customers",
    url: "https://www.adverrize.in",
    siteName: "Adverrize",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  alternates: {
    canonical: "https://www.adverrize.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXX');
      `,
          }}
        />
      </body>
    </html>
  )
}
