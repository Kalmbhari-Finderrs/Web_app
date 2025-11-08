import React from 'react'
import { information } from '../../data/information'

const ProjectInfo = ({
    className,
    information,
}) => {
  return (
    <div className={className}>
        <h1 className='text-center xl:text-4xl sm:text-2xl '>{information.title} {information.id}</h1>

        <ul className='p-12 text-xl'>
          {information.points.map((point,index)=>
            <li key={index}>{point}</li>
        )}
        </ul>
    </div>
  )
}

ProjectInfo.propTypes = {
  information:information
}

export default ProjectInfo