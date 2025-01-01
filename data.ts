import { project } from "./types";

export const techDict: Record<string, string> = {
  NextJS: "https://nextjs.org/",
  Codegen: "https://www.graphql-codegen.com/",
  TypeScript: "https://www.typescriptlang.org/",
  NodeJS: "https://nodejs.org/",
  GraphQL: "https://graphql.org/",
  "Prisma ORM": "https://www.prisma.io/",
  PostgreSQL: "https://www.postgresql.org/",
  Redis: "https://redis.io/",
  AWS: "https://aws.amazon.com/",
  ReactJS: "https://reactjs.org/",
  TailwindCSS: "https://tailwindcss.com/",
  NextAuth: "https://next-auth.js.org/",
  MongoDB: "https://www.mongodb.com/",
  ExpressJS: "https://expressjs.com/",
  ChartJS: "https://www.chartjs.org/",
  Java: "https://www.java.com/",
  JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  SQL: "https://www.sql.org/",
  Git: "https://git-scm.com/",
};

export const heroTags = ["Full-Stack Dev", "Web-3", "ML-Explorer"];

export const heroText =
  "Driven by the thirst for knowledge and a passion for tech. Eager to learn, grow, and contribute through impactful projects and collaborative experiences. Let’s connect and create something amazing together!";

export const projects: project[] = [
  {
    name: "X-Clone",
    imageSrc: "/X-Clone.png",
    description:
      "A Twitter-Clone social built with a modern tech stack, featuring optimized frontend and backend architecture.",
    techStack: [
      "NextJS",
      "Codegen",
      "TypeScript",
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
    imageSrc: "/PromptHub.png",
    description:
      "An open-source platform for sharing, discovering creative prompts and a user-friendly interface.",
    techStack: ["NextJS", "ReactJS", "TailwindCSS", "NextAuth", "MongoDB"],
    gitLink: "https://github.com/GuruDarshan57/Prompt-Hub",
    liveLink: "https://prompt-hub-zeta.vercel.app/",
  },
  {
    name: "URL Shortener",
    imageSrc: "/URL-Shortner.png",
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

export const aboutDescription =
  "I am a 21-year-old Full-Stack Developer, Web3 and Machine Learning enthusiast, proficient in the MERN stack. With a passion for learning and staying updated with emerging technologies, I thrive on tackling challenging problems to unlock my potential and push beyond self-imposed boundaries. My love for art and aesthetics fuels my creativity, helping me build projects that are both functional and visually appealing. When I’m not coding, you’ll find me reading novels, binge-watching series, or exploring new ways to build and grow.";

export const aboutSkillTags = [
  "NextJS",
  "ReactJS",
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
