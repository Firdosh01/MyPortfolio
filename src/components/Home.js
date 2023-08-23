import React from 'react'
import alexander from '../assets/alexander.jpg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';
// import Typical from 'react-typical'

function Home() {
  return (
    <div name='home' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 via-black'>

      <div className='flex flex-col items-center justify-between h-full max-w-screen-lg px-4 pt-32 mx-auto md:flex-row '>
        <div className='flex flex-col justify-center h-full '>
          
          {/* <h2 className='text-4xl font-bold text-white sm:text-7xl'> I'm a Frontend Developer</h2> */}

          <h2 className='text-3xl font-bold text-white sm:text-4xl'>Hello, I am</h2>
          {/* <h2 className='text-[2rem] font-bold text-white sm:text-6xl'>
          <Typical
            loop={Infinity}
            steps={[
              'Frontend Developer',
              8000, 
              'Firdosh Ansari',
              9000, 
            ]}
          />
          </h2> */}
            <h2 className='mt-1 text-4xl font-bold text-white typewriter sm:text-5xl'>
              Firdosh Ansari
            </h2>
            
          <p className='max-w-[35rem] py-2 text-gray-500'>
             MERN stack web developer, specializing mostly in Frontend design and development.
          </p>

          <div>
            <Link to='portfolio' smooth duration={500} className='flex px-6 py-3 my-2 text-white rounded-md cursor-pointer w-fit item-center bg-gradient-to-r from-cyan-500 to-blue-500 group '>
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
