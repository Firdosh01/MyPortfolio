import React from 'react'
import Weather from '../assets/Weather.PNG'
import TictactoeGame from '../assets/TictactoeGame.PNG'
import DevDetective from '../assets/DevDetective.PNG'

function Portfolio() {
  return (
    <div name= "Portfolio" className='w-full text-white bg-gradient-to-b from-black to-gray-800 md:h-screen'>
      <div className='flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto'>

        <div className='pb-8 mt-12'>
        
        <p className='inline text-4xl font-bold border-b-4 border-gray-500'>Portfolio</p>
        <p className='py-6'>Check out some of my work right here</p>
      
      </div>

      <div className='grid gap-8 px-12 sm:grid-cols-2 md:grid-cols-3 sm:px-0'>
        <div className='rounded-lg shadow-md shadow-gray-600'>

        <img src= {Weather} alt="" />
        <div>
          <button>Demo</button>
          <button>Code</button>
        </div>
        </div>

      </div>

    </div>
    </div>
  )
}

export default Portfolio
