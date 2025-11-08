import React, { use } from 'react'
import { fetchData } from '../../Network/apiServices'

const ImagesCarrsol = ({
    id
}) => {
    const data=  use(fetchData(id))
  return (
    <div>ImagesCarrsol {data}</div>
  )
}

export default ImagesCarrsol