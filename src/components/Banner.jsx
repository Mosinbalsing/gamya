import React from 'react'

const Banner = ({src}) => {
  return (
    <div className='container-fluid w-screen '>
      <div className='bg-cover bg-center max-w-screen'>
        <img src={src} alt="" srcset="" />
      </div>
    </div>
  )
}

export default Banner
