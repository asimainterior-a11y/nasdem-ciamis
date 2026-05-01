"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";

// Data Pengurus Terstruktur
const hierarchy = {
  ketuaDpd: [
    {
      id: 2,
      name: "Dr. TOTO MARWOTO, M.Pd.",
      role: "Ketua DPD NasDem Ciamis",
      img: "/images/01.png",
      visi: "Menjadikan NasDem Ciamis sebagai wadah perjuangan rakyat yang inklusif.",
      misi: ["Memperkuat struktur hingga akar rumput", "Mencetak kader berkualitas"]
    }
  ],
  wakilKetua: [
    {
      id: 3,
      name: "ENDANG CAHYADI",
      role: "Wakil Ketua Badan Pemenangan Pemilu",
      img: "/images/02.png",
      visi: "Kemenangan mutlak berbasis data dan aspirasi.",
      misi: ["Pemetaan dapil", "Strategi pemenangan modern"]
    },
    {
      id: 4,
      name: "ARIE MIRZHA",
      role: "Wakil Ketua Bidang Organisasi Keanggotaan",
      img: "/images/05.png",
      visi: "Soliditas organisasi melalui kaderisasi aktif.",
      misi: ["Rekrutmen terbuka", "Manajemen database anggota"]
    }
  ],
  sekretarisBendahara: [
    {
      id: 5,
      name: "H. ENDANG KUSNANDANG, S.Pd.",
      role: "Sekretaris DPD NasDem Ciamis",
      img: "/images/03.png",
      visi: "Administrasi partai yang modern dan transparan.",
      misi: ["Digitalisasi arsip", "Efisiensi operasional"]
    },
    {
      id: 6,
      name: "AGUS PRIATNA, S.Sos.",
      role: "Bendahara DPD NasDem Ciamis",
      img: "/images/04.png",
      visi: "Akuntabilitas finansial sebagai pondasi kepercayaan.",
      misi: ["Manajemen dana mandiri", "Audit berkala"]
    }
  ]
};

export default function StrukturPage() {
  const [selectedMember, setSelectedMember] = useState<any | null>(null);

  // Komponen Card Kecil untuk Reusability
  const MemberCard = ({ member, isLarge = false }: { member: any, isLarge?: boolean }) => (
    <motion.div
      whileHover={{ y: -10 }}
      onClick={() => setSelectedMember(member)}
      className={`group cursor-pointer mx-auto ${isLarge ? 'max-w-[340px]' : 'max-w-[280px]'}`}
    >
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-[#002a4a] shadow-2xl">
        <img 
          src={member.img} 
          alt={member.name} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001A2E] via-transparent to-transparent opacity-90" />
        <div className="absolute bottom-6 left-6 right-6">
          <p className="text-[#FFCC00] text-[10px] font-black uppercase tracking-widest mb-1">{member.role}</p>
          <h3 className={`${isLarge ? 'text-xl' : 'text-lg'} font-bold leading-tight`}>{member.name}</h3>
        </div>
      </div>
    </motion.div>
  );

  return (
    <main className="min-h-screen bg-[#001A2E] text-white overflow-x-hidden">
      <Navbar />

      <section className="pt-40 pb-20 px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-4"
        >
          Struktur <span className="text-[#FFCC00]">Kepemimpinan</span>
        </motion.h1>
        <p className="text-slate-400 font-light max-w-2xl mx-auto uppercase tracking-widest text-xs">
          Dewan Pimpinan Daerah Kabupaten Ciamis
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-32 space-y-24">

        {/* Level 2: Ketua DPD */}
        <div className="text-center space-y-8">
          <MemberCard member={hierarchy.ketuaDpd[0]} isLarge />
          <div className="h-12 w-px bg-gradient-to-b from-[#FFCC00] to-transparent mx-auto opacity-30" />
        </div>

        {/* Level 3: Wakil Ketua (Horizontal) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto relative">
          {/* Garis penghubung horizontal dekoratif (hanya desktop) */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 w-32 h-px bg-white/5" />
          {hierarchy.wakilKetua.map(m => <MemberCard key={m.id} member={m} />)}
        </div>

        {/* Level 4: Sekretaris & Bendahara (Horizontal) */}
        <div className="pt-16 border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {hierarchy.sekretarisBendahara.map(m => <MemberCard key={m.id} member={m} />)}
          </div>
        </div>

      </section>

      {/* Modal Pop-up (Tetap Sama) */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-6 bg-[#001A2E]/95 backdrop-blur-md"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#002a4a] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] border border-white/10 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="md:col-span-5 h-[400px] md:h-auto">
                  <img src={selectedMember.img} className="w-full h-full object-cover" />
                </div>
                <div className="md:col-span-7 p-8 md:p-12 space-y-6">
                  <div>
                    <p className="text-[#FFCC00] font-bold uppercase tracking-widest text-[10px] mb-2">{selectedMember.role}</p>
                    <h2 className="text-3xl font-bold">{selectedMember.name}</h2>
                  </div>
                  <div className="pt-6 border-t border-white/10 space-y-4">
                    <div>
                      <h4 className="text-[10px] uppercase text-slate-500 mb-1 font-black">Visi</h4>
                      <p className="text-sm italic text-slate-300">"{selectedMember.visi}"</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase text-slate-500 mb-2 font-black">Misi Strategis</h4>
                      <ul className="text-sm space-y-1 text-slate-300">
                        {selectedMember.misi.map((m: string, i: number) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#FFCC00] rounded-full" /> {m}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex gap-4 pt-6">
                    <button className="flex-1 bg-[#FFCC00] text-[#001A2E] py-4 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em]">
                       Hubungi Pengurus
                    </button>
                    <button onClick={() => setSelectedMember(null)} className="px-8 border border-white/10 rounded-2xl text-xs uppercase font-bold">Tutup</button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}