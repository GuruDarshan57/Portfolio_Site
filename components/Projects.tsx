import React from "react";
import { project } from "@/types";
import ProjectCard from "./ProjectCard";

const projects: project[] = [
  {
    name: "X-Clone",
    imageSrc: "/static/X-Clone.png",
    description:
      "A Twitter-Clone social built with a modern tech stack, featuring optimized frontend and backend architecture.",
    techStack: [
      "NextJS",
      "Codegen",
      "Typescript",
      "NodeJS",
      "GraphQL",
      "Prisma ORM",
      "PostgreSQL",
      "Redis",
      "AWS",
    ],
    gitLink: "https://github.com/GuruDarshan57/X_Clone",
    liveLink: "https://x-clone-g57.vercel.app/",
  },
  {
    name: "Prompt Hub",
    imageSrc: "/static/PromptHub.png",
    description:
      "An open-source platform for sharing, discovering creative prompts and a user-friendly interface.",
    techStack: ["NextJS", "ReactJS", "TailwindCSS", "NextAuth", "MongoDB"],
    gitLink: "https://github.com/GuruDarshan57/Prompt-Hub",
    liveLink: "https://prompt-hub-zeta.vercel.app/",
  },
  {
    name: "URL Shortener",
    imageSrc: "/static/URL-Shortner.png",
    description:
      "A robust URL shortening service with user authentication, data visualization dashboards, and intutive interface.",
    techStack: [
      "ReactJS",
      "TailwindCSS",
      "NodeJS",
      "ExpressJS",
      "ChartJS",
      "MongoDB",
    ],
    gitLink: "https://github.com/GuruDarshan57/URL-Shortner-Frontend",
    liveLink: "https://urlshortner-g57.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col gap-8 w-full py-10">
      <h2 className="font-bold text-4xl tracking-wide">Projects</h2>
      <div className="grid grid-cols-2 gap-x-10 gap-y-8 self-center">
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
