"use client";
import { Icon } from "@iconify/react";

const leaders = [
  { 
    name: "H. Toto Marwoto", 
    role: "Ketua DPD", 
    img: "/images/02.png" 
  },
  { 
    name: "Endang Cahyadi", 
    role: "Sekretaris", 
    img: "/images/01.png" 
  },
  { 
    name: "Nama Bendahara", 
    role: "Bendahara", 
    img: "/images/03.png" 
  },
];

export default function TeamProfile() {
  return (
    <section className="py-24 bg-[#001A2E] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4 tracking-tighter uppercase">
            Struktur Kepemimpinan
          </h2>
          <div className="h-1.5 w-24 bg-[#FFCC00] mx-auto" />
          <p className="mt-4 text-slate-400 font-medium uppercase tracking-[0.3em] text-xs">
            DPD NasDem Kabupaten Ciamis
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {leaders.map((p, idx) => (
            <div key={idx} className="group relative">
              {/* Image Card */}
              <div className="relative z-10 aspect-[3/4] rounded-2xl overflow-hidden border-2 border-white/5 transition-all duration-500 group-hover:border-[#FFCC00]/50 shadow-2xl">
                <img 
                  src={p.img} 
                  alt={p.name} 
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out" 
                />
                
                {/* Overlay Gradasi agar teks terbaca */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#001A2E] via-[#001A2E]/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                
                {/* Info Teks */}
                <div className="absolute bottom-8 left-8 right-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[#FFCC00] text-[10px] font-black uppercase tracking-[0.2em] mb-1">
                    {p.role}
                  </p>
                  <h4 className="text-2xl font-bold leading-tight tracking-tight">
                    {p.name}
                  </h4>
                  
                  {/* Dekorasi Garis saat Hover */}
                  <div className="w-0 group-hover:w-full h-[2px] bg-[#FFCC00] mt-3 transition-all duration-500 shadow-[0_0_10px_#FFCC00]" />
                </div>
              </div>

              {/* Background Frame Accent */}
              <div className="absolute -inset-3 border border-white/5 rounded-[2rem] -z-0 group-hover:rotate-2 group-hover:scale-105 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}