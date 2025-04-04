"use client";

import About from "@/components/About";
import Hero from "@/components/Hero";
import Links from "@/components/Links";
import Navbar from "@/components/NavBar";
import Projects from "@/components/Projects";
import Utilities from "@/components/Extras";

export default function Home() {
  return (
    <div className="dark:bg-black dark:text-white flex flex-col items-center h-screen w-screen relative">
      <div className="w-11/12 sm:w-3/4 lg:w-2/3 xl:w-1/2 flex flex-col items-center max-h-full overflow-y-scroll scroll-smooth hidescrollbar">
        <Navbar />
        <Hero />
        <Projects />
        <About />

        <Utilities />
      </div>
      <Links />
    </div>
  );
}
