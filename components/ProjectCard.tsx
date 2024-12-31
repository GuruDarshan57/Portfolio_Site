import React from "react";
import Link from "next/link";
import { project } from "@/types";
import Image from "next/image";
import { FaGithubSquare } from "react-icons/fa";
import { PiLinkSimpleFill } from "react-icons/pi";

const ProjectCard = ({
  name,
  description,
  imageSrc,
  techStack,
  gitLink,
  liveLink,
}: project) => {
  return (
    <div className="border-2 flex flex-col gap-4 w-full min-h-80 p-4 rounded-md">
      <Image
        src={imageSrc}
        height={1000}
        width={2000}
        className="w-full h-fit rounded-md"
        alt={"project_cover_image"}
      />
      <div className="w-full flex justify-between items-center">
        <div className="font-bold tracking-wide">{name}</div>
        <div className="flex gap-2 items-center">
          <Link href={gitLink} className="" target="_blank">
            <FaGithubSquare className="size-7" />
          </Link>
          <Link href={liveLink} className="" target="_blank">
            <PiLinkSimpleFill className="size-8" />
          </Link>
        </div>
      </div>
      <div className="text-justify">{description}</div>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="border-2 p-0.5 px-1.5 rounded-md tracking-wide text-sm font-bold"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
