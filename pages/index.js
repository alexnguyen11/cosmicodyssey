import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Explore from "@/components/sections/Explore";

export default function Home() {
  return (
    <div className="min-h-screen bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
      <Explore />
      </div>
    </div>
  );
}
