import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Gabriel U. de Freitas | Portfolio",
  description: "Analista de M&A e Marketing Intelligence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={cn(inter.variable, outfit.variable, "font-sans min-h-screen bg-grid-pattern")}>
        <main className="w-full transition-all duration-300">
          {children}
        </main>
      </body>
    </html>
  );
}
