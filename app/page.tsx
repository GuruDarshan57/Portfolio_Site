"use client";

import About from "@/components/About";
import Hero from "@/components/Hero";
import Links from "@/components/Links";
import Navbar from "@/components/NavBar";
import Projects from "@/components/Projects";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.body.classList.toggle("dark");
  }, []);
  return (
    <div className="dark:bg-black dark:text-white flex flex-col items-center h-screen w-screen relative">
      <Navbar />
      <div className="flex justify-center w-full max-h-full overflow-y-scroll scroll-smooth hidescrollbar">
        <div className="flex flex-col items-center w-11/12 sm:w-3/4 lg:w-2/3 xl:w-1/2 h-full">
          <Hero />
          <Projects />
          <About />
        </div>
      </div>
      <Links />
    </div>
  );
}
