import React from 'react'
import {portfolios} from './constants'

function Portfolio() {

  return (

      < div name="portfolio" className='w-full text-black bg-white dark:bg-gradient-to-b dark:from-black dark:to-gray-800' >
        <div className='flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto '>

          <div className='pb-8 mt-12 fade-in' >

            <p className='inline p-2 text-4xl font-bold text-black border-b-4 border-gray-500 dark:text-white '>Projects</p>
            <p className='py-6 text-black dark:text-white'>Check out some of my work right here</p>

          </div>

          <div className='grid grid-cols-1 gap-8 px-0 md:px-4 md:grid-cols-2 lg:grid-cols-2'>
            {
              portfolios.map( ({id, name, src, demo, code, desc}) => (
                <div key={id} className='p-2 duration-500 rounded-lg shadow-md cursor-pointer md:p-5 bg-slate-100 dark:bg-transparent dark:shadow-gray-600 hover:scale-105 fade-in'>
                  <h2 className='text-base font-semibold text-black dark:text-white md:text-xl'>{name}</h2>
                  <div className='flex items-center justify-center py-3'>  
                  <img src={src} alt="" className='md:h-[150px] h-[150px] sm:w-[300px] w-[250px] roundedmd  rounded-sm' loading='lazy' />
                  </div>
                  <div>
                    <p className='text-sm text-black dark:text-white md:text-base'>{desc}</p>
                  </div>
                  <div className='flex items-center justify-center'>
                  <a href={demo} rel="noreferrer" className='flex justify-between w-full text-black item-center dark:text-white' target='_blank'>
                    <button className='w-1/2 m-4 duration-200 hover:scale-105'>Demo
                    </button>
                    </a>

                  <a href={code} rel="noreferrer" className='flex justify-between w-full text-black dark:text-white item-center' target='_blank'>
                    <button className='w-1/2 m-4 duration-200 hover:scale-105'>Code</button>
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
