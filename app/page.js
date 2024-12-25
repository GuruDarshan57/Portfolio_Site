"use client"

import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Home() {
  return (
    <div className="dark:bg-black dark:text-white flex justify-center h-screen max-h-screen w-screen overflow-y-scroll hidescrollbar">
      <div className="border-2 max-w-[700px] w-full h-full">
        <Navbar />
      </div>
    </div>
  );
}
