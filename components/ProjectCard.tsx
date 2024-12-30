import React from "react";
import Link from "next/link";
import { project } from "@/types";
import Image from "next/image";

const ProjectCard = ({
  name,
  description,
  imageSrc,
  techStack,
  gitLink,
  liveLink,
}: project) => {
  return (
    <div className="border-2 flex flex-col gap-4 w-80 min-h-80 p-4 rounded-md">
      <Image
        src={imageSrc}
        height={1000}
        width={2000}
        className="w-full h-fit rounded-md"
        alt={"project_cover_image"}
      />
      <Link href={liveLink} className="font-bold tracking-wide">
        {name}
      </Link>
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
