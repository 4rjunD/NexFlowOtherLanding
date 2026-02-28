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
  title: "NexFlow — Predict Engineering Delays Before They Hit",
  description: "NexFlow predicts engineering delays 2-3 weeks before they hit. Connect GitHub, Jira, and Slack to get a weekly one-page report showing exactly where your team is at risk.",
  keywords: ["engineering delays", "sprint prediction", "engineering intelligence", "delivery risk", "predictive analytics", "engineering management", "sprint velocity"],
  metadataBase: new URL("https://nexflowinc.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NexFlow — Predict Engineering Delays Before They Hit",
    description: "NexFlow predicts engineering delays 2-3 weeks before they hit. Get a weekly one-page report showing exactly where your team is at risk.",
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
    title: "NexFlow — Predict Engineering Delays Before They Hit",
    description: "Predict engineering delays 2-3 weeks early. Ship on time, every time.",
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
              "description": "NexFlow predicts engineering delays 2-3 weeks before they hit. Connect GitHub, Jira, and Slack to get a weekly one-page report showing exactly where your team is at risk.",
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
