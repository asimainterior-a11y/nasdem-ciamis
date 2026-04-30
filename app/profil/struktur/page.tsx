"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";

// Data Pengurus
const teamMembers = [
  {
    id: 1,
    name: "H. Toto Marwoto, M.Pd.",
    role: "Ketua DPD",
    img: "/images/02.png",
    bio: "Memimpin dengan visi restorasi untuk mewujudkan Ciamis yang lebih baik.",
    visi: "Menjadikan NasDem Ciamis sebagai wadah perjuangan rakyat yang inklusif.",
    misi: ["Memperkuat struktur hingga akar rumput", "Mencetak kader berkualitas"],
    alamat: "Kec. Ciamis, Kabupaten Ciamis",
    phone: "0811-xxxx-xxxx",
    social: { ig: "@toto.marwoto", fb: "H Toto Marwoto" }
  },
  {
    id: 2,
    name: "Endang Cahyadi",
    role: "Sekretaris",
    img: "/images/01.png",
    bio: "Dedikasi tinggi dalam manajerial partai untuk memastikan roda organisasi berjalan dinamis.",
    visi: "Digitalisasi organisasi partai menuju era 5.0.",
    misi: ["Modernisasi administrasi", "Sinkronisasi program DPC & DPD"],
    alamat: "Kec. Kertasari, Ciamis",
    phone: "0812-xxxx-xxxx",
    social: { ig: "@endang.cahyadi", fb: "Endang Cahyadi" }
  },
  {
    id: 3,
    name: "Agus Priatna, S.Sos.",
    role: "Bendahara",
    img: "/images/03.png",
    bio: "Menjaga transparansi dan akuntabilitas finansial sebagai pondasi kepercayaan publik.",
    visi: "Manajemen keuangan partai yang bersih, transparan, dan mandiri.",
    misi: ["Optimalisasi dana gotong royong", "Pelaporan keuangan berkala"],
    alamat: "Kec. Kawali, Ciamis",
    phone: "0813-xxxx-xxxx",
    social: { ig: "@agus.priatna", fb: "Agus Priatna" }
  }
  // ... tambahkan data dummy lainnya di sini
];

// GUNAKAN 'export default' sebelum fungsi komponen
export default function StrukturPage() {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

  return (
    <main className="min-h-screen bg-[#001A2E] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-4"
        >
          Struktur <span className="text-[#FFCC00]">Kepemimpinan</span>
        </motion.h1>
        <p className="text-slate-400 font-light max-w-2xl mx-auto">
          Mengenal lebih dekat para penggerak perubahan di Kabupaten Ciamis.
        </p>
      </section>

      {/* Grid Pengurus */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedMember(member)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-[#002a4a]">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001A2E] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-[#FFCC00] text-[10px] font-black uppercase tracking-widest mb-1">{member.role}</p>
                  <h3 className="text-xl font-bold leading-tight">{member.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal Pop-up */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-6 bg-[#001A2E]/90 backdrop-blur-md"
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
                <div className="md:col-span-5">
                  <img src={selectedMember.img} className="w-full h-full object-cover min-h-[400px]" />
                </div>
                <div className="md:col-span-7 p-8 md:p-12 space-y-6">
                  <h2 className="text-3xl font-bold">{selectedMember.name}</h2>
                  <p className="text-[#FFCC00] font-bold uppercase tracking-widest text-xs">{selectedMember.role}</p>
                  <div className="pt-6 border-t border-white/10">
                    <h4 className="text-xs uppercase text-slate-500 mb-2 font-bold">Visi</h4>
                    <p className="text-sm italic">"{selectedMember.visi}"</p>
                  </div>
                  <div className="flex gap-4 pt-6">
                    <button className="flex-1 bg-[#FFCC00] text-[#001A2E] py-3 rounded-xl font-bold uppercase text-[10px] tracking-widest">
                       Hubungi
                    </button>
                    <button onClick={() => setSelectedMember(null)} className="px-6 border border-white/10 rounded-xl">Tutup</button>
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