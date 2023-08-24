import React from 'react'
import {sociallinks} from './constants'

function SocialLinks() {

    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {
                    sociallinks.map(( {id, child, href, style}) => (
                        <li key={id} className={'flex justify-between w-40 px-4 bg-black  items-center h-14 ml-[-100px] dark:bg-gray-500 hover:rounded-md duration-300 hover:ml-[-10px]' + " " + style}>

                            <a href={href} rel="noreferrer" className='flex justify-between w-full text-[#DA5724] dark:text-white item-center' target='_blank'>
                               
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
