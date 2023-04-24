import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';


function SocialLinks() {

    const links = [
        {
            id: 1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: "https://www.linkedin.com/in/firdosh01/",
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    Github <FaGithub size={30} />
                </>
            ),
            href: "https://github.com/Firdosh01",
        }, {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: "mailto: mdfirdosha37@gmail.com",
        }, {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: ""
        }
    ]

    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {
                    links.map(( {id, child, href, style}) => (
                        <li key={id} className={'flex justify-between w-40 px-4  items-center h-14 ml-[-100px] bg-gray-500 hover:rounded-md duration-300 hover:ml-[-10px]' + " " + style}>

                            <a href={href} className='flex justify-between w-full text-white item-center' target='_blank'>
                               
                               {child}

                            </a>

                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SocialLinks
