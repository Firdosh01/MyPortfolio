import React from 'react'
import {portfolios} from './constants'

function Portfolio() {

  return (

      < div name="portfolio" className='w-full text-black bg-white dark:bg-gradient-to-b dark:from-black dark:to-gray-800' >
        <div className='flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto'>

          <div className='pb-8 mt-12' >

            <p className='inline p-2 text-4xl font-bold text-black border-b-4 border-gray-500 dark:text-white '>Portfolio</p>
            <p className='py-6 text-black dark:text-white'>Check out some of my work right here</p>

          </div>

          <div className='grid gap-8 px-12 sm:grid-cols-2 md:grid-cols-3 sm:px-0' >
            {
              portfolios.map( ({id, src, demo, code}) => (
                <div key={id} className='duration-500 rounded-lg shadow-md bg-slate-100 dark:bg-transparent dark:shadow-gray-600 hover:scale-105'>

                  <img src={src} alt="" className='rounded-md  h-[200px] w-full object-cover' loading='lazy' />
                  <div className='flex items-center justify-center'>
                  <a href={demo} rel="noreferrer" className='flex justify-between w-full text-black item-center dark:text-white' target='_blank'>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo
                    </button>
                    </a>

                  <a href={code} rel="noreferrer" className='flex justify-between w-full text-black dark:text-white item-center' target='_blank'>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                    </a>
                  </div>
                </div>

              ))
            }

          </div>

        </div>
    </div>
  )
}

export default Portfolio
