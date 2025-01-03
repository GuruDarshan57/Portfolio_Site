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
    icon: <FaSquareGithub className="size-7" />,
    href: "https://github.com/GuruDarshan57",
  },
  {
    title: "X",
    icon: <FaSquareXTwitter className="size-7" />,
    href: "https://x.com/GuruDarshan_573",
  },
  {
    title: "LinkedIn",
    icon: <FaLinkedin className="size-7" />,
    href: "https://www.linkedin.com/in/gurudarshan57/",
  },
  {
    title: "Mail",
    icon: <IoMail className="size-7" />,
    href: "guru573116@gmail.com",
  },
];

const Links = () => {
  return (
    <div className="right-3 bottom-4 sm:right-auto sm:bottom-5 fixed">
      <FloatingDock items={links} />
    </div>
  );
};

export default Links;
