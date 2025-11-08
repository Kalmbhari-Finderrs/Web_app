import React, { lazy, Suspense } from 'react'
import ImagesCarrsol from './ImagesCarrsol'
const ImagesCarrsolLoaded = lazy(<ImagesCarrsol/>)
const ProjectImages = ({
    className,
    id
}) => {
  return (
    <div className={`${className} px-10 py-20`}>
      <div
      className='bg-[#ebecee]  w-full h-full rounded-3xl'
      >
        <Suspense fallback={<div>Loading....</div>}>
          <ImagesCarrsol id={id}/>
        </Suspense>
      </div>
    </div>
  )
}

export default ProjectImages