import React from "react";
import Image from "next/image";
import Photo from "../public/Photo.jpg";

const HeroSection = () => {
  return (
    <div
      id="home"
      className="flex flex-col sm:flex-row gap-10 w-full p-2 py-4 pt-20"
    >
      <div className="flex-1 order-2 sm:order-1 flex flex-col gap-2">
        <div className="font-bold text-6xl">Guru Darshan</div>
        <div className="text-sm pb-8 flex flex-wrap gap-2">
          {["Full-Stack Dev", "Web-3", "ML-Explorer"].map((tag, index) => (
            <div
              key={index}
              className="bg-slate-200 dark:bg-slate-800 p-0.5 px-2 rounded-md tracking-wide text-sm font-bold"
            >
              {tag}
            </div>
          ))}
        </div>
        <div className="text-justify text-sm">
          Driven by the thirst for knowledge and a passion for tech. Eager to
          learn, grow, and contribute through impactful projects and
          collaborative experiences. Let’s connect and create something amazing
          together!
        </div>
      </div>
      <div className="flex order-1 sm:order-2">
        <Image
          src={"/static/Photo.jpg"}
          height={400}
          width={200}
          className="h-24 w-20 rounded-md"
          alt="photo"
        />
      </div>
    </div>
  );
};

export default HeroSection;
