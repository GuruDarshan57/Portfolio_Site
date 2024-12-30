import React from "react";
import Link from "next/link";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FloatingDock } from "./ui/FloatingDock";

const links = [
  {
    title: "Github",
    icon: <FaSquareGithub />,
    href: "https://github.com/GuruDarshan57",
  },
  {
    title: "X",
    icon: <FaSquareXTwitter />,
    href: "https://x.com/GuruDarshan_573",
  },
  {
    title: "LinkedIn",
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/gurudarshan57/",
  },
  {
    title: "Mail",
    icon: <IoMail />,
    href: "guru573116@gmail.com",
  },
];

const Links = () => {
  return (
    <div className="bottom-5 bg-white dark:bg-black fixed">
      <FloatingDock items={links} />
    </div>
  );
};

export default Links;
