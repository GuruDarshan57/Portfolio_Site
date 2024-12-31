"use client";

import About from "@/components/About";
import Hero from "@/components/Hero";
import Links from "@/components/Links";
import Navbar from "@/components/NavBar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="dark:bg-black dark:text-white flex flex-col items-center h-screen w-screen relative">
      <Navbar />
      <div className="flex justify-center w-full max-h-full overflow-y-scroll scroll-smooth hidescrollbar">
        <div className="flex flex-col items-center w-1/2 h-full">
          <Hero />
          <Projects />
          <About />
        </div>
      </div>
      <Links />
    </div>
  );
}
