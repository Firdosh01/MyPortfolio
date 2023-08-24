import React from 'react'
import alexander from '../assets/alexander.jpg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';
// import Typical from 'react-typical'

function Home({darkMode}) {
  return (
    <div name='home' className='w-full h-screen bg-white dark:bg-gradient-to-b dark:from-black dark:to-gray-800 dark:via-black'>

      <div className='flex flex-col items-center justify-between h-full max-w-screen-lg px-4 pt-32 mx-auto md:flex-row '>
        <div className='flex flex-col justify-center h-full '>
          
          <h2 className='text-3xl font-bold text-black dark:text-white sm:text-4xl'>Hello, I am</h2>
          
            <h2 className={`mt-1 text-4xl font-bold text-black dark:text-white sm:text-5xl ${darkMode ? "typewriter" : "typewrite"}`}>
              Firdosh Ansari
            </h2>
            
          <p className='max-w-[35rem] py-2 text-gray-500'>
             MERN stack web developer, specializing mostly in Frontend design and development.
          </p>

          <div>
            <Link to='portfolio' smooth duration={500} className='flex px-6 py-3 my-2 text-white rounded-md cursor-pointer bg-[#DA5724] w-fit item-center dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 group '>
              Portfolio
              <span className='duration-300 group-hover:rotate-90'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img src={alexander} alt="my profile" width={320} className='xsa:mt-3 rounded-2xl' loading='lazy' />
        </div>
        
      </div>

    </div>
  )
}

export default Home
