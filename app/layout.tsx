import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://reddy-anna-connect.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Reddy Anna Connect | Digital Entertainment & Support",
    template: "%s | Reddy Anna Connect",
  },
  description:
    "Explore Reddy Anna Connect and contact our support team for information, digital entertainment and community assistance.",
  applicationName: "Reddy Anna Connect",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Reddy Anna Connect",
    title: "Reddy Anna Connect | Digital Entertainment & Support",
    description:
      "A direct connection for digital entertainment information, community and support.",
    images: [
      {
        url: "/og.png",
        width: 1536,
        height: 1024,
        alt: "Reddy Anna Connect — Digital entertainment and support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reddy Anna Connect",
    description:
      "Digital entertainment. Simple support. One direct connection.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0d0d",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
