import { ReactNode } from "react";
import { project } from "./types";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { DiNodejs } from "react-icons/di";
import { SiGraphql, SiJsonwebtokens } from "react-icons/si";
import { TbBrandPrisma } from "react-icons/tb";
import { SiPostgresql } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaAws } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { RiJavascriptLine } from "react-icons/ri";
import { DiMysql } from "react-icons/di";
import { FaSquareGithub } from "react-icons/fa6";
import { FaChartPie } from "react-icons/fa6";
import { FaShieldHalved } from "react-icons/fa6";
import { LuSquareDot } from "react-icons/lu";

export const techDict: Record<string, { url: string; icon: ReactNode }> = {
  NextJS: { url: "https://nextjs.org/", icon: <RiNextjsLine /> },
  Codegen: { url: "https://www.graphql-codegen.com/", icon: <LuSquareDot /> },
  TypeScript: {
    url: "https://www.typescriptlang.org/",
    icon: <TbBrandTypescript />,
  },
  NodeJS: { url: "https://nodejs.org/", icon: <DiNodejs /> },
  GraphQL: { url: "https://graphql.org/", icon: <SiGraphql /> },
  "Prisma ORM": { url: "https://www.prisma.io/", icon: <TbBrandPrisma /> },
  PostgreSQL: { url: "https://www.postgresql.org/", icon: <SiPostgresql /> },
  Redis: { url: "https://redis.io/", icon: <DiRedis /> },
  AWS: { url: "https://aws.amazon.com/", icon: <FaAws /> },
  React: { url: "https://reactjs.org/", icon: <FaReact /> },
  TailwindCSS: { url: "https://tailwindcss.com/", icon: <RiTailwindCssFill /> },
  NextAuth: { url: "https://next-auth.js.org/", icon: <FaShieldHalved /> },
  MongoDB: { url: "https://www.mongodb.com/", icon: <SiMongodb /> },
  ExpressJS: { url: "https://expressjs.com/", icon: <SiExpress /> },
  ChartJS: { url: "https://www.chartjs.org/", icon: <FaChartPie /> },
  Java: { url: "https://www.java.com/", icon: <FaJava /> },
  JavaScript: {
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: <RiJavascriptLine />,
  },
  JWT: { url: "https://jwt.io/", icon: <SiJsonwebtokens /> },
  SQL: { url: "https://www.sql.org/", icon: <DiMysql /> },
  Git: { url: "https://git-scm.com/", icon: <FaSquareGithub /> },
};

export const heroTags = ["Full-Stack Dev", "Web-3", "ML-Explorer"];

export const heroText =
  "Driven by the thirst for knowledge and a passion for tech. Eager to learn, grow, and contribute through impactful projects and collaborative experiences. Let’s connect and create something amazing together!";

export const projects: project[] = [
  {
    name: "Twitter-Clone",
    imageSrc: "/Twitter-Clone.webp",
    description:
      "A Twitter-Clone social built with a modern tech stack, featuring optimized frontend and backend architecture.",
    techStack: [
      "NextJS",
      "Codegen",
      "NodeJS",
      "PostgreSQL",
      "Redis",
      "AWS",
      "GraphQL",
      "Prisma ORM",
    ],
    gitLink: "https://github.com/GuruDarshan57/X_Clone",
    liveLink: "https://x-clone-g57.vercel.app/",
  },
  {
    name: "Prompt Hub",
    imageSrc: "/PromptHub.webp",
    description:
      "An open-source platform for sharing, discovering creative prompts and a user-friendly interface.",
    techStack: ["React", "NextJS", "NextAuth", "TailwindCSS", "MongoDB"],
    gitLink: "https://github.com/GuruDarshan57/Prompt-Hub",
    liveLink: "https://prompt-hub-zeta.vercel.app/",
  },
  {
    name: "URL Shortener",
    imageSrc: "/URL-Shortner.webp",
    description:
      "A robust URL shortening service with user authentication, data visualization dashboards, and intutive interface.",
    techStack: [
      "React",
      "TailwindCSS",
      "JWT",
      "ChartJS",
      "NodeJS",
      "MongoDB",
      "ExpressJS",
    ],
    gitLink: "https://github.com/GuruDarshan57/URL-Shortner-Frontend",
    liveLink: "https://urlshortner-g57.vercel.app/",
  },
];

export const aboutDescription =
  "I am a 21-year-old Full-Stack Developer, Web3 and Machine Learning enthusiast, proficient in the MERN stack. With a passion for learning and staying updated with emerging technologies, I thrive on tackling challenging problems to unlock my potential and push beyond self-imposed boundaries. My love for art and aesthetics fuels my creativity, helping me build projects that are both functional and visually appealing. When I’m not coding, you’ll find me reading novels, binge-watching series, or exploring new ways to build and grow.";

export const aboutSkillTags = [
  "NextJS",
  "React",
  "NodeJS",
  "ExpressJS",
  "Java",
  "JavaScript",
  "TypeScript",
  "TailwindCSS",
  "SQL",
  "PostgreSQL",
  "MongoDB",
  "Git",
];
