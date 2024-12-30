import React from "react";

const About = () => {
  return (
    <div id="about" className="flex flex-col gap-4 w-full py-10">
      <h2 className="font-bold text-4xl tracking-wide">About</h2>
      <div className="text-justify tracking-wide">
        I am a 21-year-old Full-Stack Developer, Web3 and Machine Learning
        enthusiast, proficient in the MERN stack. With a passion for learning
        and staying updated with emerging technologies, I thrive on tackling
        challenging problems to unlock my potential and push beyond self-imposed
        boundaries. My love for art and aesthetics fuels my creativity, helping
        me build projects that are both functional and visually appealing. When
        I’m not coding, you’ll find me reading, binge-watching series, or
        exploring new ways to build and grow.
      </div>
      <div className="flex flex-wrap gap-2">
        {[
          "NextJS",
          "React",
          "Node.js",
          "Express",
          "Java",
          "JavaScript",
          "TypeScript",
          "TailwindCSS",
          "SQL",
          "Postgres",
          "MongoDB",
          "Git",
        ].map((skill, index) => (
          <div
            key={index}
            className="border-2 p-0.5 px-1.5 rounded-md tracking-wide text-sm font-bold"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
