import type { Metadata } from "next";
import { Archivo_Narrow, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const archivoNarrow = Archivo_Narrow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-archivo-narrow",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PT Citra Plastik Makmur – Plastic Injection Molding Manufacturer",
  description: "Produsen plastic injection molding terpercaya dengan 20+ tahun pengalaman, 55 mesin injeksi 40-850 ton, melayani industri otomotif dan manufaktur nasional & internasional sejak 1997.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${archivoNarrow.variable} ${ibmPlexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
