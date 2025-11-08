import React from 'react'
import { useParams } from 'react-router'
import ProjectImages from '../Components/InformationComponents/ProjectImages'
import ProjectInfo from '../Components/InformationComponents/ProjectInfo'

const Information = () => {
    const {id} = useParams()
  return (
    <div className='w-full flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col'>
        <ProjectImages className={`flex-1/3 h-svh`}
          id={id}
        />
        <ProjectInfo 
        className={`flex-2/3 h-svh`}
        information={{title:'Project some',id:id,points:["abc","def"]}}
        />
    </div>
  )
}

export default Information