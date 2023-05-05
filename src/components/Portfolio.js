import React from 'react'
import Weather from '../assets/Weather.PNG'
import TictactoeGame from '../assets/TictactoeGame.PNG'
import DevDetective from '../assets/DevDetective.PNG'

function Portfolio() {

  const portfolios = [
    {
      id: 1,
      src: Weather
    },
    {
      id: 2,
      src: TictactoeGame
    },
    {
      id: 3,
      src: DevDetective
    },
    {
      id: 4,
      src: TictactoeGame
    },
    {
      id: 5,
      src: Weather
    },
    {
      id: 6,
      src: DevDetective
    },

  ]
  return (

      < div name="portfolio" className='w-full text-white bg-gradient-to-b from-black to-gray-800' >
        <div className='flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto' data-aos="fade-up-left">

          <div className='pb-8 mt-12' >

            <p className='inline text-4xl font-bold border-b-4 border-gray-500 '>Portfolio</p>
            <p className='py-6'>Check out some of my work right here</p>

          </div>

          <div className='grid gap-8 px-12 sm:grid-cols-2 md:grid-cols-3 sm:px-0' data-aos="zoom-in">
            {
              portfolios.map( ({id, src}) => (
                <div key={id} className='rounded-lg shadow-md shadow-gray-600'>

                  <img src={src} alt="" className='duration-200 rounded-md hover:scale-105' loading='lazy' />
                  <div className='flex items-center justify-center'>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
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
