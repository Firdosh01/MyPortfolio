import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';


function SocialLinks() {
    return (
        <div className='flex flex-col top-[35%] left-0 fixed'>
            <ul>
                <li className='flex justify-between w-40 px-4 bg-black item-center h-14'>
                    <a href="" className='flex justify-between w-full text-white item-center'>
                        <>
                        LinkedIn <FaLinkedin size={30}/>
                        </>

                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SocialLinks
