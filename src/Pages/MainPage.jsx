import React from 'react'
import NavigationRail from '../Components/NavigationRail/NavigationRail'
import ProjectsNearMe from '../Components/ProjectsNearMe/ProjectsNearMe'

const MainPage = () => {
  return (
    <div className='flex flex-row w-svw h-svh'>
        <NavigationRail/>
        <ProjectsNearMe/>
    </div>
  )
}

export default MainPage