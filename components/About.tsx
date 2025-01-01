import Link from "next/link";
import { techDict } from "@/data";

const About = () => {
  return (
    <div id="about" className="flex flex-col gap-4 w-full p-2 py-10 pb-24">
      <h2 className="font-bold text-4xl tracking-wide">About</h2>
      <div className="text-justify tracking-wide">
        I am a 21-year-old Full-Stack Developer, Web3 and Machine Learning
        enthusiast, proficient in the MERN stack. With a passion for learning
        and staying updated with emerging technologies, I thrive on tackling
        challenging problems to unlock my potential and push beyond self-imposed
        boundaries. My love for art and aesthetics fuels my creativity, helping
        me build projects that are both functional and visually appealing. When
        I’m not coding, you’ll find me reading novels, binge-watching series, or
        exploring new ways to build and grow.
      </div>
      <div className="flex flex-wrap gap-2">
        {[
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
        ].map((skill, index) => (
          <Link
            href={techDict[skill]}
            key={index}
            target="_blank"
            className="border-2 p-0.5 px-1.5 rounded-md tracking-wide text-sm font-bold cursor-pointer"
          >
            {skill}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default About;
