import React from 'react'
import { Link } from 'react-router'

const ProjectTile = ({LinkTo}) => {
  return (
    <Link to={LinkTo}>
    <div className='w-80 h-100 border-2 rounded-2xl cursor-pointer'
    >
        ProjectName
    </div>
    </Link>
  )
}

export default ProjectTile