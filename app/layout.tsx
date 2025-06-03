import type { Metadata } from "next";
import { Nunito, Bebas_Neue } from "next/font/google";
import "./globals.css";

// Configure Nunito (Google Font)
const nunito = Nunito({
  subsets: ['latin'], // Adjust subsets as needed (e.g., 'latin-ext' for extended Latin)
  display: 'swap', // Prevents layout shift
  variable: '--font-nunito', // CSS variable for Tailwind
});

// Configure Bebas Neue (Google Font)
const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400', // Bebas Neue has only one weight
  display: 'swap',
  variable: '--font-bebas',
});

export const metadata: Metadata = {
  title: "DECLEANUP NETWORK",
  description: "Empowering Cleanups. Tokenizing Impact",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${bebas.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
