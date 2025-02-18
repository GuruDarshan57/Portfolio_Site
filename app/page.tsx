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
      setViews(parseInt(res.data))
    }
    catch(err:any){
      console.error(err)
    }
  }
  return (
    <div className="dark:bg-black dark:text-white flex flex-col items-center h-screen w-screen relative">
      <div className="absolute top-8 left-8 tracking-wider clock text-red-400 hidden sm:flex"></div>
      <div className="absolute top-8 right-8 tracking-wider text-red-400 hidden sm:flex">Views - {views?views:0}</div>
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
