import React from "react";
import Image from "next/image";
import { heroTags, heroText } from "@/data";

const HeroSection = () => {
  return (
    <div
      id="home"
      className="flex flex-col sm:flex-row gap-10 w-full p-2 py-4 pt-20"
    >
      <div className="flex-1 order-2 sm:order-1 flex flex-col gap-2">
        <div className="font-bold text-7xl">Guru Darshan</div>
        <div className="text-sm pb-8 flex flex-wrap gap-2">
          {heroTags.map((tag, index) => (
            <div
              key={index}
              className="bg-slate-200 dark:bg-slate-800 p-0.5 px-2 rounded-md tracking-wide text-sm font-bold"
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="text-justify tracking-wide leading-7">{heroText}</div>
      </div>
      <Image
        src={"/Photo.webp"}
        height={400}
        width={200}
        className="h-24 w-20 order-1 sm:order-2 rounded-md"
        alt="photo"
      />
    </div>
  );
};

export default HeroSection;
