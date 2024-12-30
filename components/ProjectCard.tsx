import React from "react";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

const ProjectCard = () => {
  return (
    <div className="border-2 flex flex-col gap-4 w-80 h-80 p-4 rounded-md">
      <div className="">
        <FaXTwitter className="dark:text-white size-10 text-black" />
      </div>
      <Link href={""} className="font-bold tracking-wide">
        PromptHub
      </Link>
      <div className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        aliquid magnam quisquam pariatur animi, illo dicta rerum! Nesciunt, fuga
        quaerat.
      </div>
      <div className="flex flex-wrap gap-2">
        <div className="border-2 p-0.5 px-1.5 rounded-md tracking-wide text-sm font-bold">
          Lorem
        </div>
        <div className="border-2 p-0.5 px-1.5 rounded-md tracking-wide text-sm font-bold">
          Lorem
        </div>
        <div className="border-2 p-0.5 px-1.5 rounded-md tracking-wide text-sm font-bold">
          Lorem
        </div>
        <div className="border-2 p-0.5 px-1.5 rounded-md tracking-wide text-sm font-bold">
          Lorem
        </div>
        <div className="border-2 p-0.5 px-1.5 rounded-md tracking-wide text-sm font-bold">
          Lorem
        </div>
        <div className="border-2 p-0.5 px-1.5 rounded-md tracking-wide text-sm font-bold">
          Lorem
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
