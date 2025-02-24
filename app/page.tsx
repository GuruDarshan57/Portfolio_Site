"use client";

import About from "@/components/About";
import Hero from "@/components/Hero";
import Links from "@/components/Links";
import Navbar from "@/components/NavBar";
import Projects from "@/components/Projects";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [views,setViews]=useState(0)
  useEffect(()=>{
    const intervalId=setInterval(()=>{
      document.getElementsByClassName("clock")[0].innerHTML=new Date().toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:true});
    },1000)
    getViews()
    return ()=>clearInterval(intervalId)
  },[])

  //fetches view count from next serverless function
  const getViews = async () => {
    try{
      const res=await axios.get("/api/views")
      setViews(parseInt(res.data.views))
    }
    catch(err:any){
      console.error(err)
    }
  }
  return (
    <div className="dark:bg-black dark:text-white flex flex-col items-center h-screen w-screen relative">
      <div className="absolute top-8 left-8 tracking-wider clock hidden sm:flex"></div>
      <div className="absolute top-8 right-8 tracking-wider hidden sm:flex">Views - {views?views:0}</div>
      <div className="absolute bottom-8 left-8 hidden sm:flex gap-2 items-center">
      <div className="bg-red-600 size-4"></div>
        <div className="bg-red-600 dark:bg-white size-4 rounded-full"></div>
        <div className="size-0 border-red-600 border-l-[1rem] border-t-[0.5rem] border-b-[0.5rem] border-y-transparent">
        </div>
      </div>
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
