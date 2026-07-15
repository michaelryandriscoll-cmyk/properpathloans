// app/layout.js
import "./globals.css";
import LayoutShell from "./components/LayoutShell";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL("https://properpathloans.com"),
  title: {
    default: "Personal Loans for Every Need | Proper Path Loans",
    template: "%s | Proper Path Loans",
  },
  description:
    "Find personal loans for debt consolidation, emergencies, home improvement, and more. Compare rates from top lenders. Check your options with no impact to your credit score.",
  keywords: [
    "personal loans",
    "debt consolidation loans",
    "bad credit personal loans",
    "emergency loans",
    "home improvement loans",
    "personal loan rates",
    "fast personal loans",
    "online personal loans",
    "personal loan comparison",
  ],
  authors: [{ name: "Proper Path Loans", url: "https://properpathloans.com" }],
  creator: "Proper Path Loans",
  publisher: "Proper Path Loans",
  openGraph: {
    type: "website",
    siteName: "Proper Path Loans",
    url: "https://properpathloans.com",
    title: "Personal Loans for Every Need | Proper Path Loans",
    description:
      "Compare personal loan options from top lenders. Debt consolidation, emergency loans, home improvement, and more. Check your rate with no credit impact.",
    images: [
      {
        url: "/og-image-default.jpg",
        width: 1200,
        height: 630,
        alt: "Proper Path Loans — Personal Loans Made Simple",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Loans for Every Need | Proper Path Loans",
    description:
      "Find personal loans for debt consolidation, emergencies, home improvement, and more. No credit impact to check your rate.",
    images: ["/og-image-default.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://properpathloans.com",
  },
  category: "finance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="ppl-body">
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
