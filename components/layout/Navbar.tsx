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
        title: "Anggota Fraksi",
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
  { name: 'Aspirasi', href: '/aspirasi' },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const activeMenuData = menuItems.find(item => item.name === activeMenu);

  return (
    <nav 
      className="fixed top-0 w-full z-[99999] text-white"
      onMouseLeave={() => setActiveMenu(null)}
    >
      {/* Baris Atas: Logo & Branding */}
      <div className="bg-[#001A2E] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-4 group">
            <div className="w-15 h-15 bg-white rounded-full flex items-center justify-center shadow-inner overflow-hidden border-2 border-[#FFCC00]/20 group-hover:border-[#FFCC00] transition-all duration-500"> 
              <img 
                src="/images/logo.png" 
                alt="Logo" 
                className="w-[120%] h-[120%] object-contain scale-120%" 
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-medium text-lg tracking-wide">DPD PARTAI <span className="text-[#FFCC00]">NASDEM</span></span>
              <span className="text-[11px] font-light tracking-[0.2em] text-slate-400">KABUPATEN CIAMIS</span>
            </div>
          </Link>
          
          <Link href="/kta" className="group flex items-center gap-3">
             <div className="text-right hidden md:block">
                <p className="text-[10px] font-light text-slate-400 uppercase tracking-widest">Gabung Partai</p>
                <p className="text-xs font-normal">DAFTAR</p>
             </div>
             <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#FFCC00] text-[#001A2E] group-hover:scale-110 transition-transform duration-300">
                <Icon icon="lucide:user-plus" width="20" />
             </div>
          </Link>
        </div>
      </div>

      {/* Baris Bawah: Navigasi Menu */}
      <div className="bg-[#002a4a]/80 backdrop-blur-md relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center">
          {menuItems.map((item) => (
            <div 
              key={item.name} 
              onMouseEnter={() => setActiveMenu(item.name)} 
              className="relative"
            >
              <Link 
                href={item.href || "#"}
                className={`block px-8 py-4 text-[11px] font-normal uppercase tracking-[0.25em] transition-all relative
                  ${activeMenu === item.name ? 'text-[#FFCC00]' : 'hover:text-[#FFCC00]/70 text-slate-200'}`}
              >
                {item.name}
                {activeMenu === item.name && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FFCC00]"
                  />
                )}
              </Link>
            </div>
          ))}
        </div>

        {/* Mega Menu Dropdown */}
        <AnimatePresence>
          {activeMenuData?.columns && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 w-full bg-white text-[#001A2E] shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
            >
              <div className="max-w-7xl mx-auto px-10 py-10 grid grid-cols-3 gap-16">
                {activeMenuData.columns.map((col) => (
                  <div key={col.title} className="space-y-6">
                    <h3 className="text-[10px] font-bold text-[#FFCC00] uppercase tracking-[0.3em] pb-2 border-b border-slate-100">
                      {col.title}
                    </h3>
                    <div className="flex flex-col gap-3">
                      {col.links.map((link) => (
                        <Link 
                          key={link.name} 
                          href={link.href} 
                          className="text-[13px] font-normal text-slate-600 hover:text-[#005697] hover:translate-x-1 transition-all flex items-center gap-2 group"
                        >
                          <div className="w-1 h-1 bg-slate-300 rounded-full group-hover:bg-[#FFCC00] transition-colors" />
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              {/* Footer kecil di dalam mega menu untuk kesan detail */}
              <div className="bg-slate-50 py-3 px-10 text-center">
                 <p className="text-[9px] text-slate-400 tracking-widest font-light">RESTORASI INDONESIA - GERAKAN PERUBAHAN</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}