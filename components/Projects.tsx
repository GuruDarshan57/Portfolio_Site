import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data";

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col gap-8 w-full p-2 py-10">
      <h2 className="font-bold text-4xl tracking-wide">Projects</h2>
      <div className="flex flex-col gap-x-10 gap-y-8 self-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            imageSrc={project.imageSrc}
            description={project.description}
            techStack={project.techStack}
            gitLink={project.gitLink}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
