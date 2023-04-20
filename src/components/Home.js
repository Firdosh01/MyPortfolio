import React from 'react'
import alexander from '../assets/alexander.jpg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

function Home() {
  return (
    <div name='home' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 via-black'>

      <div className='flex flex-col items-center justify-center h-full max-w-screen-lg px-4 mx-auto md:flex-row'>
        <div className='flex flex-col justify-center h-full '>
          
          <h2 className='text-4xl font-bold text-white sm:text-7xl'> I'm a Frontend Developer</h2>
          <p className='max-w-md py-5 text-gray-500'>
            I have 1 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            Tailwind, Javascript and React Js.
          </p>

          <div>
            <button className='flex px-6 py-3 my-2 text-white rounded-md cursor-pointer w-fit item-center bg-gradient-to-r from-cyan-500 to-blue-500 group'>
              Portfolio
              <span className='duration-300 group-hover:rotate-90'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img src={alexander} alt="my profile" width={400} className='rounded-2xl' />
        </div>
        
      </div>

    </div>
  )
}

export default Home
