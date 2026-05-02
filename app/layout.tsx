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
      {/* Menggunakan biru yang lebih sesuai dengan logo */}
      <body className={`${jakarta.variable} font-sans bg-[#19367F] min-h-screen text-white`}>
        <Navbar />
        
        {/* Main container tanpa shadow agar seamless di layar besar */}
        <main className="max-w-[1440px] mx-auto bg-[#19367F] min-h-screen relative">
          {children}
        </main>
      </body>
    </html>
  );
}