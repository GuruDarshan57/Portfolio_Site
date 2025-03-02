import axios from "axios";
import { useEffect, useState } from "react";

const Utilities = () => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      document.getElementsByClassName("clock")[0].innerHTML =
        new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
        });
      document.querySelector(".blink_dot")?.classList.toggle("bg-transparent")
    }, 1000);
    getViews();
    return () => clearInterval(intervalId);
  }, []);

  //fetches view count from next serverless function
  const getViews = async () => {
    try {
      const res = await axios.get("/api/views");
      setViews(parseInt(res.data.views));
    } catch (err: any) {
      console.error(err);
    }
  };
  return (
    <>
      <div className="absolute top-8 left-8 justify-center items-center gap-2 tracking-wider hidden sm:flex">
        <div className="blink_dot size-2 rounded-full bg-red-500"></div>
        <div className="clock">00:00:00 AM</div>
      </div>
      <div className="border-r-2 border-b-2 pr-2 dark:border-slate-600 absolute top-8 right-8 tracking-wider hidden sm:flex flex-col">
        <div className="text-sm">Views</div>
        <div className="relative -top-2 -left-1 text-7xl"> {views ? views : "00"}</div>
      </div>
      <div className="absolute bottom-8 left-8 hidden sm:flex gap-2 items-center">
        <div className="bg-red-600 size-4"></div>
        <div className="bg-black dark:bg-white size-4 rounded-full"></div>
        <div className="border-red-600 border-l-[1rem] border-y-[0.5rem] border-y-transparent"></div>
      </div>
    </>
  );
};

export default Utilities;
