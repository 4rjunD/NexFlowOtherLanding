import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Instrument_Serif, Playfair_Display, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "NexFlow — Predictive Intelligence for Modern Teams",
  description: "NexFlow connects your data sources to surface emerging risks, hidden patterns, and capacity signals before they become problems. AI-powered predictive intelligence.",
  keywords: ["predictive intelligence", "AI predictions", "data intelligence", "operational analytics", "risk detection", "pattern recognition", "predictive analytics"],
  metadataBase: new URL("https://nexflowinc.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NexFlow — Predictive Intelligence for Modern Teams",
    description: "Stop reacting to problems after they happen. NexFlow shows you what's coming before anyone else sees it.",
    type: "website",
    url: "https://nexflowinc.com",
    siteName: "NexFlow",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NexFlow - Predictive Intelligence Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexFlow — Predictive Intelligence for Modern Teams",
    description: "Stop reacting to problems after they happen. See what's coming first.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [
      { url: "/favicon.png", type: "image/png" },
    ],
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FS0378CSZ7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FS0378CSZ7');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${instrumentSerif.variable} ${playfairDisplay.variable} ${dmSans.variable} antialiased`}
      >
        {children}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "NexFlow",
              "description": "Predictive intelligence platform that connects your data sources to surface emerging risks, hidden patterns, and capacity signals before they become problems.",
              "url": "https://nexflowinc.com",
              "applicationCategory": "BusinessApplication",
              "offers": {
                "@type": "Offer",
                "price": "149",
                "priceCurrency": "USD",
                "priceValidUntil": "2027-12-31"
              }
            }),
          }}
        />
      </body>
    </html>
  );
}
