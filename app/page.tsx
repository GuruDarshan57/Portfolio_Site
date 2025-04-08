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
      <div className="w-full px-2 sm:px-10 lg:px-20 xl:px-96 flex flex-col items-center max-h-full overflow-y-scroll scroll-smooth hidescrollbar">
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
