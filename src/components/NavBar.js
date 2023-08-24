import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';
import moon from '../assets/Experience/moon.png'
import sun from '../assets/Experience/sun.png'
import { useEffect } from 'react';

function NavBar({darkMode, setDarkMode}) {

  const [nav, setNav] = useState(false)


  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    localStorage.setItem('darkMode', !darkMode)
  }

  useEffect(() => {
    setDarkMode(JSON.parse(localStorage.getItem('darkMode')))
  }, [])

  return (
    <div className={`fixed flex items-center justify-between w-full h-20 px-4 bg-white  dark:bg-black ${darkMode ? "shadow-light" : "shadow-dark"}`}>
      <div 
      className='hidden themeController md:block'
      onClick={toggleTheme}
      >
        
       {
         darkMode ? 
            <img src={moon} alt="moon" className=' themeIcon dissappear'  /> 
            :
            <img src={sun} alt="sun" className=' themeIcon appear' />
       }
      </div>
      <div>
        <h1 className="ml-2 text-4xl text-black font-signature dark:text-white">Firdosh</h1>
      </div>

      <ul className='hidden md:flex'>
        {
          links.map(({ link, id }) => (
            <li key={id} className='px-4 font-medium text-gray-500 capitalize duration-200 cursor-pointer hover:scale-105'>

              <Link to={link} smooth duration={500}>{link}</Link>
            </li>
          ))
        }
      </ul>

      <div onClick={() => setNav(!nav)} className='z-10 pr-4 text-gray-500 cursor-pointer md:hidden'>

        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}

      </div>

      {nav && (

        <ul className='absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen text-black bg-white dark:text-gray-500 dark:bg-gradient-to-b dark:from-black dark:to-gray-800'>

          {
            links.map(({ link, id }) => (
              <li key={id} className='px-4 py-6 text-4xl capitalize cursor-pointer'>
                
              <Link onClick={ () => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
              
              </li>
            ))
          }

        </ul>

      )}



    </div>
  )
}

export default NavBar
