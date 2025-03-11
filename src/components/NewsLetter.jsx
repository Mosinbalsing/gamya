import React from 'react'

const NewsLetter = () => {
  return (
    <div className='container-fluid bg-[url(assets/Images/banner/aboutbanner.png)] bg-cover bg-center h-[400px]'>
        <div className='flex justify-center items-center h-full'>
            <div className=' bg-opacity-80 p-4 rounded-lg gap-3 flex flex-col'>
                <h1 className='text-3xl text-center font-bold text-white'>Subscribe to our Newsletter</h1>
                <p className='text-center text-white'>Get the latest news and updates from us</p>
                <div className='flex justify-center items-center gap-4'>
                    <input type="text" placeholder='Enter your email address' className='border-2 border-gray-300 p-2 rounded-lg' />
                    <button className="bg-[#a67c52] text-white p-2 px-4 rounded">→</button>
                </div>
            </div>
            </div>
    </div>
  )
}

export default NewsLetter
