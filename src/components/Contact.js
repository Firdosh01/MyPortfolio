import React from 'react'

function Contact() {
  return (
    <div name='contact' className='w-full p-4 text-black bg-white dark:bg-gradient-to-b dark:from-black dark:to-gray-800'>

        <div className='flex flex-col justify-center h-full max-w-screen-lg p-4 mx-auto '>
            <div className='pb-8'>
                <p className='inline p-2 text-4xl font-bold text-black border-b-4 border-gray-500 dark:text-white'>Contact</p>
                <p className='py-6 text-black dark:text-white'>Submit the form below to get in touch with me</p>
            </div>

            <div className='flex items-center justify-center ' >
                <form action="https://getform.io/f/1221ac93-a5f6-4278-abbd-406d1e1ad005" method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name='name' placeholder='Enter your name' className='p-2 text-black bg-transparent border-2 border-black rounded-md dark:text-white focus:outline-none dark:border-white' />
                    <input type="text" name='email' placeholder='Enter your email' className='p-2 mt-1 text-black bg-transparent border-2 border-black rounded-md dark:text-white focus:outline-none dark:border-white' />
                    <textarea name="message" placeholder='Enter your message'  rows="10" className='p-2 mt-1 text-black bg-transparent border-2 border-black rounded-md dark:text-white focus:outline-none dark:border-white'></textarea>
                    
                    <button className='flex items-center px-6 py-3 mx-auto my-8 text-white duration-300 bg-[#DA5724] rounded-md dark:bg-gradient-to-b dark:from-cyan-500 dark:to-blue-500 hover:scale-110'>
                        Let's talk
                    </button>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
