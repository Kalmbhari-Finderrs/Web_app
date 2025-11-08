import React from 'react'
import { useParams } from 'react-router'
import ProjectImages from '../Components/InformationComponents/ProjectImages'
import ProjectInfo from '../Components/InformationComponents/ProjectInfo'

const Information = () => {
    const {id} = useParams()
  return (
    <div className='w-full flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col'>
        <ProjectImages className={`flex-1/4 bg-blue-50 h-svh`}/>
        <ProjectInfo 
        className={`flex-3/4 bg-red-200 h-svh`}
        id={id}
        />
    </div>
  )
}

export default Information