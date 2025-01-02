"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MdSunny } from "react-icons/md";
import { IoIosMoon } from "react-icons/io";

interface navElement {
  name: string;
  href: string;
}

const navElements: navElement[] = [
  { name: "Home", href: "/#home" },
  { name: "Projects", href: "/#projects" },
  { name: "About", href: "/#about" },
];

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="w-11/12 sm:w-3/4 lg:w-2/3 xl:w-1/2 bg-white dark:bg-black min-h-24 flex justify-between items-center px-1">
      <div
        className="cursor-pointer p-2 place-content-center border-[1.4px] dark:text-cyan-600 dark:border-cyan-600 rounded-md"
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
      <div className="border-[1.4px] border-slate-700 dark:border-slate-300 p-1.5 flex font-semibold items-center tracking-wide rounded-md text-sm">
        {navElements.map((nav_ele, index) => (
          <Link
            key={index}
            className={`px-4 ${
              index % 2 != 0
                ? "border-black dark:border-white border-l-[1px] border-r-[1px]"
                : ""
            }`}
            href={nav_ele.href}
          >
            {nav_ele.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
