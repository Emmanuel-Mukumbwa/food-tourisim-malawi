import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Load custom fonts
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Malawi Food & Travel",
  description: "Discover Malawi's rich culinary traditions and breathtaking travel destinations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className="bg-light">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}