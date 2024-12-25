"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import { MdSunny } from "react-icons/md";
import { IoIosMoon } from "react-icons/io";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false)
    return (
        <div className="border-b-2 w-full h-16 flex justify-between items-center sticky top-0">
            <div className="p-1.5 px-2.5 place-content-center border-[1.4px] rounded-full dark:text-cyan-600 dark:border-cyan-600" onClick={() => { document.body.classList.toggle("dark"); setDarkMode((mode) => !mode) }}>{darkMode ? <MdSunny className='size-4' /> : <IoIosMoon className='size-4' />}</div>
            <div className="border-[1.5px] border-slate-700 dark:border-slate-300 flex font-semibold gap-4 items-center tracking-wide p-1.5 px-4 rounded-full text-sm">
                <Link className='' href="#home">Home</Link>
                <Link className='' href="#projects">Projects</Link>
                <Link className='' href="#about">About</Link>
            </div>
        </div>
    )
}

export default Navbar