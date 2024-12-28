"use client"

import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import Links from "@/components/Links";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="dark:bg-black dark:text-white flex justify-center h-screen max-h-screen w-screen relative">
      <div className="flex flex-col max-w-[700px] w-full h-full">
        <Navbar />
        <div className="w-full h-full overflow-y-scroll hidescrollbar scroll-smooth flex flex-col pb-20">
          <HeroSection />
          <Projects />
          <About />
        </div>
      </div>
      <Links />
    </div>
  );
}
