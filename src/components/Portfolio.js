import React from 'react'
import {portfolios} from './constants'

function Portfolio() {

  return (

      < div name="portfolio" className='w-full text-white bg-gradient-to-b from-black to-gray-800' >
        <div className='flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto'>

          <div className='pb-8 mt-12' >

            <p className='inline p-2 text-4xl font-bold border-b-4 border-gray-500 '>Portfolio</p>
            <p className='py-6'>Check out some of my work right here</p>

          </div>

          <div className='grid gap-8 px-12 sm:grid-cols-2 md:grid-cols-3 sm:px-0' >
            {
              portfolios.map( ({id, src, demo, code}) => (
                <div key={id} className='rounded-lg shadow-md shadow-gray-600'>

                  <img src={src} alt="" className='duration-200 rounded-md hover:scale-105 h-[200px] w-full object-cover' loading='lazy' />
                  <div className='flex items-center justify-center'>
                  <a href={demo} className='flex justify-between w-full text-white item-center' target='_blank'>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo
                    </button>
                    </a>

                  <a href={code} className='flex justify-between w-full text-white item-center' target='_blank'>
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
