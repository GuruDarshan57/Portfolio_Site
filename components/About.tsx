import Link from "next/link";
import { aboutDescription, aboutSkillTags, techDict } from "@/data";

const About = () => {
  return (
    <div id="about" className="flex flex-col gap-4 w-full p-2 py-10 pb-24">
      <h2 className="font-bold text-4xl tracking-wide">About</h2>
      <div className="text-justify tracking-wide leading-7">
        {aboutDescription}
      </div>
      <div className="flex flex-wrap gap-2">
        {aboutSkillTags.map((skill, index) => (
          <Link
            href={techDict[skill].url}
            key={index}
            target="_blank"
            className="border-2 p-0.5 px-1.5 flex gap-2 items-center justify-center rounded-md tracking-wide text-sm font-bold cursor-pointer"
          >
            {techDict[skill].icon}
            {skill}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default About;
