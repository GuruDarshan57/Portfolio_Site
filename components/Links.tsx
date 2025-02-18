import React from "react";
import Link from "next/link";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import {Dock,DockIcon} from "@/components/magicui/dock"

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
    <div className="w-full flex justify-center items-center bottom-4 sm:right-auto sm:bottom-5 fixed">
      <Dock className="bg-white dark:bg-black">
        {links.map((link, index) => (
          <DockIcon key={index} title={link.title}>
            <Link href={link.href} target="_blank">{link.icon}</Link>
          </DockIcon>
        ))}
      </Dock>
    </div>
  );
};

export default Links;
