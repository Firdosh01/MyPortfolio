import React from 'react'
import alexander from '../assets/alexander.jpg'
import My from '../assets/my.jpeg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';



function Home({darkMode}) {
  return (
    <div name='home' className='w-full h-screen bgwhite bg-[#D5D5E0]  darkbg-gradient-to-b darkfrom-black darkto-gray-800 darkvia-black dark:bg-[#121226]'>

      <div className='flex flex-col items-center justify-between h-full max-w-screen-lg px-4 pt-32 mx-auto md:flex-row fadeInUp'>
        <div className='flex flex-col justify-center h-full '>
          
          <h2 className='text-3xl font-bold text-black dark:text-white sm:text-4xl'>Hello, I am</h2>
          
            <h3 className={`mt-1 text-4xl font-bold text-black dark:text-white sm:text-5xl ${darkMode ? "typewriter" : "typewrite"}`}>
              Firdosh Ansari
            </h3>
            
          <p className='max-w-[35rem] py-2 text-gray-500 fadeInUp'>
             MERN stack web developer, specializing mostly in Frontend design and development.
          </p>

          <div className='flex'>
          <div>
            <Link to='portfolio' smooth duration={500} className='flex px-6 py-3 my-2 text-white rounded-md cursor-pointer bg-[#DA5724] w-fit item-center dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 group select-none'>
              Portfolio
              <span className='duration-300 group-hover:rotate-90'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
              </span>
            </Link>
          </div>
          
          <div className='flex items-center justify-center lg:hidden'>
            <ul>
              <li className='flex gap-2 ml-3'>
                <a 
                href="https://www.linkedin.com/in/firdosh01" 
                className='text-[#DA5724] cursor-pointer select-none w-fit item-center dark:text-cyan-500'
                target='_blank'
                rel="noreferrer"
                >
                     <FaLinkedin size={30} />
                </a>
                <a 
                href="https://github.com/Firdosh01" 
                className='text-[#DA5724] cursor-pointer select-none w-fit item-center dark:text-cyan-500'
                target='_blak'
                rel="noreferrer"
                >
                     <FaGithub size={30} />
                </a>
                <a 
                href="mailto: mdfirdosha37@gmail.com" 
                className='text-[#DA5724] cursor-pointer select-none w-fit item-center dark:text-cyan-500'
                target='_blank'
                rel="noreferrer"
                >
                     <HiOutlineMail size={30} />
                </a>
              </li>
            </ul>
        </div>
        
        </div>
        </div>

        <div>
          <img src={My} alt="my profile" width={320}  className='xsa:mt-3 rounded-2xl h-[365px] select-none object-cover brightness-90' loading='lazy' />
        </div>
        
      </div>

    </div>
  )
}

export default Home
