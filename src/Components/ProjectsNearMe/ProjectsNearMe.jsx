import React from 'react'
import ProjectTile from './ProjectTile'
import { PageNames } from '../../Constants'

const ProjectsNearMe = () => {
  return (
    <div className='w-full overflow-y-auto'>
        <h1 className='text-center xl:text-4xl sm:text-2xl '>Projects Near me</h1>
        <div className='flex flex-row flex-wrap gap-10 justify-center mt-8 transition-all ease-in duration-200' >

        <ProjectTile LinkTo={`${PageNames.project}/${123}`}/>
        <ProjectTile/>
        <ProjectTile/>
        <ProjectTile/>
        <ProjectTile/>
        <ProjectTile/>
        <ProjectTile/>
        <ProjectTile/>
        <ProjectTile/>
        <ProjectTile/>
        <ProjectTile/>
        <ProjectTile/>
        </div>
    </div>
  )
}

export default ProjectsNearMe