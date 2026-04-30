import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  variable: "--font-jakarta",
  weight: ['300', '400', '500', '600', '700', '800']
});

export const metadata: Metadata = {
  title: "NasDem Ciamis - Gerakan Perubahan",
  description: "Website Resmi DPD Partai NasDem Kabupaten Ciamis",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      {/* 1. Body dikunci ke Navy */}
      <body className={`${jakarta.variable} font-sans bg-[#001A2E] min-h-screen`}>
        <Navbar />
        
        {/* 
          2. MASALAH UTAMA: Ganti bg-white menjadi bg-[#001A2E] 
          Juga hapus shadow-2xl agar tidak ada garis abu-abu di pinggir layar monitor besar
        */}
        <main className="max-w-[1440px] mx-auto bg-[#001A2E] min-h-screen relative">
          {children}
        </main>
      </body>
    </html>
  );
}