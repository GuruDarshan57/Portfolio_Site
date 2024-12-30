"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MdSunny } from "react-icons/md";
import { IoIosMoon } from "react-icons/io";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="w-full min-h-24 flex justify-between items-center">
      <div
        className="cursor-pointer p-2 place-content-center border-[1.4px] dark:text-cyan-600 dark:border-cyan-600 relative -left-8 rounded-md"
        onClick={() => {
          document.body.classList.toggle("dark");
          setDarkMode((mode) => !mode);
        }}
      >
        {darkMode ? (
          <MdSunny className="size-4" />
        ) : (
          <IoIosMoon className="size-4" />
        )}
      </div>
      <div className="border-[1.4px] border-slate-700 dark:border-slate-300 flex font-semibold gap-4 items-center tracking-wide p-1.5 px-4 relative -right-14 rounded-md text-sm">
        <Link className="" href="#home">
          Home
        </Link>
        <Link className="border-r-2 border-l-2 px-3" href="#projects">
          Projects
        </Link>
        <Link className="" href="#about">
          About
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
