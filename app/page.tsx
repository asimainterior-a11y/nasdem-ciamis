import Navbar from "@/components/layout/Navbar"; // Jalur yang sudah diperbaiki
import Hero from "@/components/sections/Hero";
import NewsGallery from "@/components/sections/NewsGallery";
import VisiMisi from "@/components/sections/VisiMisi";
import TeamProfile from "@/components/sections/TeamProfile";
import Footer from "@/components/sections/Footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#001A2E] overflow-x-hidden">
      <Navbar />
      
      <Hero />
      
      <div className="relative z-10">
        <NewsGallery />
      </div>

      <VisiMisi />
      
      <TeamProfile />
      
      <Footer />
    </main>
  );
}