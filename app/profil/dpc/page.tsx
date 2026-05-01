"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";

// Data Dummy DPC Kabupaten Ciamis
const dpcData = [
  { kecamatan: "Ciamis", ketua: "Asep Sunandar", sekretaris: "Cecep Mulyana", bendahara: "Euis Rohayati" },
  { kecamatan: "Cikoneng", ketua: "Dedi Kusnadi", sekretaris: "Yayan Sofyan", bendahara: "Nining Ratnaningsih" },
  { kecamatan: "Cijeungjing", ketua: "Ujang Tatang", sekretaris: "Maman Suraman", bendahara: "Siti Maryam" },
  { kecamatan: "Sadananya", ketua: "Dadang Hermawan", sekretaris: "Ginanjar Saputra", bendahara: "Kokom Komala" },
  { kecamatan: "Cidolog", ketua: "Nanang Suryana", sekretaris: "Ahmad Jubaedi", bendahara: "Cucu Cahyati" },
  { kecamatan: "Pamarican", ketua: "Hendi Suhendi", sekretaris: "Agus Gumilar", bendahara: "Imas Masitoh" },
  { kecamatan: "Cimaragas", ketua: "Kunkun Kurnia", sekretaris: "Wawan Setiawan", bendahara: "Teti Herawati" },
  { kecamatan: "Banjarsari", ketua: "Jajang Nurjaman", sekretaris: "Deni Ramdani", bendahara: "Ani Suryani" },
  { kecamatan: "Banjaranyar", ketua: "Yayat Hidayat", sekretaris: "Ade Irawan", bendahara: "Lilis Karlina" },
  { kecamatan: "Lakbok", ketua: "Dodo Zakaria", sekretaris: "Toto Warsito", bendahara: "Endah Puspita" },
  { kecamatan: "Purwadadi", ketua: "Iwan Setiawan", sekretaris: "Usep Saepudin", bendahara: "Neng Hasanah" },
  { kecamatan: "Kawali", ketua: "Engkus Kuswara", sekretaris: "Asep Saepul", bendahara: "Ai Khodijah" },
  { kecamatan: "Panawangan", ketua: "Dadan Ramdan", sekretaris: "Nana Ruhana", bendahara: "Iis Ismawati" },
  { kecamatan: "Cipaku", ketua: "Kosasih", sekretaris: "Entis Sutisna", bendahara: "Oon Rohana" },
  { kecamatan: "Jatinagara", ketua: "Agus Mulyadi", sekretaris: "Yadi Suryadi", bendahara: "Tita Rosita" },
  { kecamatan: "Panumbangan", ketua: "Enjang Maoludin", sekretaris: "Udin Baharudin", bendahara: "Mimin Mintarsih" },
  { kecamatan: "Panjalu", ketua: "Aceng Munawar", sekretaris: "Asep Kurnia", bendahara: "Lina Marlina" },
  { kecamatan: "Sukamantri", ketua: "Didi Ahmadi", sekretaris: "Ikin Sodikin", bendahara: "Tini Kartini" },
  { kecamatan: "Cihaurbeuti", ketua: "Oman Rohman", sekretaris: "Tatang Wijaya", bendahara: "Susi Susanti" },
  { kecamatan: "Sindangkasih", ketua: "Ayi Sudrajat", sekretaris: "Heri Herianto", bendahara: "Ema Fatimah" },
  { kecamatan: "Baregbeg", ketua: "Uu Rukmana", sekretaris: "Emen Sulaeman", bendahara: "Cucu Sumiati" },
  { kecamatan: "Rajadesa", ketua: "Dede Rosada", sekretaris: "Iden Nurhadi", bendahara: "Nunung Nurjanah" },
  { kecamatan: "Rancah", ketua: "Yanto Sugianto", sekretaris: "Dani Hamdani", bendahara: "Rina Herlina" },
  { kecamatan: "Tambaksari", ketua: "Ade Sobirin", sekretaris: "Mamat Slamet", bendahara: "Yanti Yuliyanti" },
  { kecamatan: "Lumbung", ketua: "Encep Saepul", sekretaris: "Aon Nasuha", bendahara: "Sari Marlina" },
  { kecamatan: "Sukadana", ketua: "Endang Suherman", sekretaris: "Pipih Saepul", bendahara: "Ika Kartika" }
];

function DpcPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDpc = dpcData.filter((d) =>
    d.kecamatan.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#001A2E] text-white selection:bg-[#FFCC00] selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-44 pb-24 px-6 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent -z-10" />
        
        <div className="max-w-7xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-none">
              Dewan Pimpinan <span className="text-[#FFCC00] italic">Cabang</span>
            </h1>
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="h-px w-12 bg-white/20" />
              <p className="text-slate-400 font-bold tracking-[0.4em] text-[10px] md:text-xs uppercase">
                Kabupaten Ciamis
              </p>
              <div className="h-px w-12 bg-white/20" />
            </div>
          </motion.div>

          {/* Search Input Box */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto relative group"
          >
            <div className="absolute inset-0 bg-[#FFCC00]/5 blur-2xl group-focus-within:bg-[#FFCC00]/10 transition-all" />
            <div className="relative flex items-center">
              <Icon 
                icon="lucide:search" 
                className="absolute left-6 text-slate-500 group-focus-within:text-[#FFCC00] transition-colors" 
                width="22" 
              />
              <input
                type="text"
                placeholder="Cari nama kecamatan..."
                className="w-full bg-white/5 border border-white/10 hover:border-white/20 rounded-2xl py-5 pl-16 pr-8 focus:outline-none focus:border-[#FFCC00]/50 transition-all backdrop-blur-md text-lg"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-6 pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDpc.map((d, idx) => (
            <motion.div
              key={d.kecamatan}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx % 3 * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFCC00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem] -z-10 blur-xl" />
              
              <div className="h-full bg-[#002a4a]/30 backdrop-blur-sm border border-white/5 rounded-[2rem] p-8 hover:bg-[#002a4a]/50 hover:border-[#FFCC00]/30 transition-all duration-500">
                {/* Card Header */}
                <div className="flex justify-between items-start mb-8">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-[700] uppercase tracking-tight group-hover:text-[#FFCC00] transition-colors duration-300">
                      {d.kecamatan}
                    </h3>
                    <p className="text-[10px] font-bold text-slate-500 tracking-widest uppercase">DPC NasDem</p>
                  </div>
                  <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-[#FFCC00]/10 group-hover:text-[#FFCC00] transition-all">
                    <Icon icon="lucide:map-pin" width="20" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="space-y-6">
                  {/* Ketua Row */}
                  <div className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 border border-white/5 group-hover:border-[#FFCC00]/10 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-[#001A2E] flex items-center justify-center overflow-hidden border border-white/10 group-hover:border-[#FFCC00]/20 transition-all">
                      <Icon icon="lucide:user-check" className="text-slate-400 group-hover:text-[#FFCC00]" width="24" />
                    </div>
                    <div>
                      <p className="text-[9px] uppercase font-black text-[#FFCC00] tracking-widest leading-none mb-1.5">Ketua DPC</p>
                      <p className="text-base font-bold text-slate-100 leading-tight">{d.ketua}</p>
                    </div>
                  </div>

                  {/* SekBen Info */}
                  <div className="grid grid-cols-2 gap-6 px-1">
                    <div className="space-y-1">
                      <p className="text-[8px] uppercase font-bold text-slate-500 tracking-[0.15em]">Sekretaris</p>
                      <p className="text-sm font-semibold text-slate-300 leading-snug">{d.sekretaris}</p>
                    </div>
                    <div className="space-y-1 border-l border-white/10 pl-6">
                      <p className="text-[8px] uppercase font-bold text-slate-500 tracking-[0.15em]">Bendahara</p>
                      <p className="text-sm font-semibold text-slate-300 leading-snug">{d.bendahara}</p>
                    </div>
                  </div>
                </div>

                {/* Footer Decor */}
                <div className="mt-8 pt-6 border-t border-white/5 flex justify-end">
                   <div className="w-2 h-2 rounded-full bg-[#FFCC00] group-hover:animate-ping" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredDpc.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-32 space-y-4"
          >
            <div className="inline-flex p-6 rounded-full bg-white/5 mb-4">
               <Icon icon="lucide:search-x" className="text-slate-700" width="48" />
            </div>
            <h4 className="text-xl font-bold text-slate-400">Kecamatan "{searchTerm}" tidak ditemukan</h4>
            <p className="text-slate-600 max-w-xs mx-auto">Coba periksa kembali ejaan nama kecamatan yang Anda cari.</p>
          </motion.div>
        )}
      </section>

      <Footer />
    </main>
  );
}

// Pastikan export default berada di baris terakhir untuk stabilitas Turbopack
export default DpcPage;