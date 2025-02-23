import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Salsa Pro - App de Práctica de Baile",
  description:
    "Aplicación interactiva de práctica de salsa con detección de tempo en tiempo real, sugerencias de pasos de baile e instrucciones de audio para bailarines individuales y parejas.",
  keywords: [
    "salsa",
    "práctica de baile",
    "detección de tempo",
    "pasos de baile",
    "aprendizaje de salsa",
  ],
  authors: [{ name: "Equipo Salsa Pro" }],
  openGraph: {
    title: "Salsa Pro - App de Práctica de Baile",
    description:
      "Domina el baile de la salsa con detección de tempo en tiempo real y guía de movimientos",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
