import type { Metadata } from "next";
import "./globals.css";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  metadataBase: new URL("https://cochininterior.in"),
  title: {
    default: "COCHIN INTERIOR | Interiors. Execution. Built Around You.",
    template: "%s | COCHIN INTERIOR",
  },
  description:
    "Interior contracting, turnkey execution and renovation for residential and commercial spaces in Kerala.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://cochininterior.in",
    siteName: "COCHIN INTERIOR",
    title: "COCHIN INTERIOR | Interiors. Execution. Built Around You.",
    description:
      "Interior contracting, turnkey execution and renovation for residential and commercial spaces in Kerala.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
