import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar() {


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


  return (
    <div className="fixed flex items-center justify-between w-full h-20 px-4 text-white bg-black">
    <div>
      <h1 className="ml-2 text-4xl font-signature">Firdosh</h1>
    </div>
    
    <ul className='hidden md:flex'>
      {
        links.map( ({link, id}) => (
          <li key={link.id} className='px-4 font-medium text-gray-500 capitalize duration-200 cursor-pointer hover:scale-105'>
        {link}
      </li>   
        ))
      }
    </ul>
    
    </div>
  )
}

export default NavBar
