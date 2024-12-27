import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
    return (
        <div className='border-white flex flex-col gap-8 w-full py-10'>
            <h2 className='font-bold text-4xl tracking-wide'>Projects</h2>
            <div className="grid grid-cols-2 gap-x-10 gap-y-8 self-center">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </div>
    )
}

export default Projects