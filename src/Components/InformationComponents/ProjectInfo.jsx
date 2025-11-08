import React from 'react'

const ProjectInfo = ({
    className,
    id,
}) => {
  return (
    <div className={className}>
        <h1 className='text-center xl:text-4xl sm:text-2xl '>Project Title for id {id}</h1>
    </div>
  )
}

export default ProjectInfo