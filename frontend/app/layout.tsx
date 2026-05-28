import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "GroceryGuru — Compare Prices at Walmart, Kroger & H-E-B",
  description:
    "Type your grocery list and instantly see which store has the lowest total price across Walmart, Kroger, and H-E-B.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={figtree.variable}>
      <body
        className="min-h-screen flex flex-col bg-surface"
        style={{ fontFamily: "var(--font-figtree), system-ui, sans-serif" }}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
