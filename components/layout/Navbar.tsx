"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import Link from 'next/link';

const menuItems = [
  { name: 'Beranda', href: '/' },
  { 
    name: 'Profil', 
    columns: [
      {
        title: "Tentang Kami",
        links: [
          { name: 'Visi & Misi', href: '/profil/visi-misi' },
          { name: 'Sejarah Perjuangan', href: '/profil/sejarah' },
          { name: 'AD/ART', href: '/profil/ad-art' },
        ]
      },
      {
        title: "Struktur Organisasi",
        links: [
          { name: 'Pengurus DPD', href: '/profil/struktur' },
          { name: 'Sayap Partai', href: '/profil/sayap' },
          { name: 'DPC Kecamatan', href: '/profil/dpc' },
        ]
      },
      {
        title: "Layanan",
        links: [
          { name: 'KTA Digital', href: '/kta' },
          { name: 'Aspirasi Warga', href: '/aspirasi' },
        ]
      }
    ]
  },
  { 
    name: 'Fraksi', 
    href: '/fraksi',
    columns: [
      {
        title: "Anggota Fraksi NasDem",
        links: [
          { name: 'H. Toto Marwoto, M.Pd.', href: '/fraksi/toto-marwoto' },
          { name: 'Endang Cahyadi', href: '/fraksi/endang-cahyadi' },
          { name: 'H. Endang Kusnandani, S.Pd.I', href: '/fraksi/endang-kusnandani' },
          { name: 'Agus Priatna, S.Sos.', href: '/fraksi/agus-priatna' },
        ]
      },
      {
        title: "Dokumentasi",
        links: [
          { name: 'Kegiatan Fraksi', href: '/fraksi/kegiatan' },
        ]
      }
    ]
  },
  { name: 'Berita', href: '/berita' },
  { name: 'Aspirasi', href: '/aspirasi' }, // Menu Utama Baru
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  // Fungsi untuk mencari data kolom berdasarkan menu yang aktif
  const activeMenuData = menuItems.find(item => item.name === activeMenu);

  return (
    <nav 
      className="fixed top-0 w-full z-[99999] bg-[#005697] text-white shadow-2xl"
      onMouseLeave={() => setActiveMenu(null)}
    >
      {/* Baris Atas */}
      <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center border-b border-white/10">
        <Link href="/" className="flex items-center gap-5">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden p-0"> 
            <img src="/images/logo.png" alt="Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="font-[600] text-xl uppercase tracking-tight">DPD PARTAI NASDEM</span>
            <span className="text-l mt-1">KABUPATEN CIAMIS</span>
          </div>
        </Link>
        <button className="bg-[#FFCC00] text-[#005697] px-6 py-2 rounded-sm font-bold text-[11px] uppercase">
          KTA DIGITAL
        </button>
      </div>

      {/* Baris Bawah */}
      <div className="bg-[#00457a] relative">
        <div className="max-w-7xl mx-auto px-6 flex items-center">
          {menuItems.map((item) => (
            <div 
              key={item.name} 
              onMouseEnter={() => setActiveMenu(item.name)} 
              className="static"
            >
              <Link 
                href={item.href || "#"}
                className={`block px-6 py-4 text-[12px] font-bold uppercase tracking-[0.2em] transition-all
                  ${activeMenu === item.name ? 'bg-white text-[#005697]' : 'hover:bg-white/10 text-white'}`}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>

        {/* Mega Menu (Otomatis muncul jika menu memiliki 'columns') */}
        <AnimatePresence>
          {activeMenuData?.columns && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-full left-0 w-full bg-white shadow-2xl border-b-4 border-[#FFCC00] text-[#005697]"
            >
              <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-4 gap-12">
                {activeMenuData.columns.map((col) => (
                  <div key={col.title} className="flex flex-col gap-4 border-l border-slate-100 pl-6">
                    <h3 className="text-[10px] font-black text-slate-400 uppercase mb-2">{col.title}</h3>
                    {col.links.map((link) => (
                      <Link 
                        key={link.name} 
                        href={link.href} 
                        className="text-sm font-bold hover:text-[#FFCC00] py-1 transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}