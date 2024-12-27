import React from 'react'
import Image from 'next/image'
import Photo from '../public/Photo.jpg'

const HeroSection = () => {
    return (
        <div className='flex gap-10 w-full p-2 py-4 pt-20'>
            <div className="flex-1 flex flex-col gap-2">
                <div className="font-bold text-6xl">Guru Darshan</div>
                <div className="text-sm pb-8">Lorem ipsum dolor sit.</div>
                <div className="text-justify text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod obcaecati quam ducimus! Magni, dolor fuga, mollitia voluptatibus explicabo unde est perspiciatis sint iure similique dignissimos facilis accusantium veniam. Natus, molestiae?</div>
            </div>
            <div className="flex ">
                <Image src={Photo} height=" " width="" className='h-24 w-20 rounded-md' alt="photo" />
            </div>
        </div>
    )
}

export default HeroSection