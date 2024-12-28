import React from 'react'
import Link from 'next/link';
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Links = () => {
    return (
        <div className='border-2 bottom-5 bg-white dark:bg-black fixed flex gap-6 px-5 p-2.5 rounded-md'>
            <Link href={"https://github.com/GuruDarshan57"} target='_blank' className=""><FaSquareGithub className='size-7 cursor-pointer' /></Link>
            <Link href={"https://x.com/GuruDarshan_573"} target='_blank' className=""><FaSquareXTwitter className='size-7 cursor-pointer' /></Link>
            <Link href={"https://www.linkedin.com/in/gurudarshan57/"} target='_blank' className=""><FaLinkedin className='size-7 cursor-pointer' /></Link>
            <Link href={"guru573116@gmail.com"} target='_blank' className=""><IoMail className='size-7 cursor-pointer' /></Link>
        </div>
    )
}

export default Links