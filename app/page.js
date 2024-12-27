"use client"

import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="dark:bg-black dark:text-white flex justify-center h-screen max-h-screen w-screen overflow-y-scroll hidescrollbar">
      <div className="flex flex-col max-w-[700px] w-full h-full">
        <Navbar />
        <div className="w-full h-full flex flex-col">
          <HeroSection />
          <Projects />
        </div>
      </div>
    </div>
  );
}
