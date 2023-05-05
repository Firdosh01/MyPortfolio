import React from 'react'

function Contact() {
  return (
    <div name='contact' className='w-full p-4 text-white bg-gradient-to-b from-black to-gray-800'>

        <div className='flex flex-col justify-center h-full max-w-screen-lg p-4 mx-auto' data-aos="fade-up-left">
            <div className='pb-8'>
                <p className='inline text-4xl font-bold border-b-4 border-gray-500'>Contact</p>
                <p className='py-6'>Submit the form below to get in touch with me</p>
            </div>

            <div className='flex items-center justify-center ' data-aos="zoom-in-up">
                <form action="https://getform.io/f/1221ac93-a5f6-4278-abbd-406d1e1ad005" method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name='name' placeholder='Enter your name' className='p-2 text-white bg-transparent border-2 rounded-md focus:outline-none' />
                    <input type="text" name='email' placeholder='Enter your email' className='p-2 text-white bg-transparent border-2 rounded-md focus:outline-none' />
                    <textarea name="message" placeholder='Enter your message'  rows="10" className='p-2 text-white bg-transparent border-2 rounded-md focus:outline-none'></textarea>
                    
                    <button className='flex items-center px-6 py-3 mx-auto my-8 text-white duration-300 rounded-md bg-gradient-to-b from-cyan-500 to-blue-500 hover:scale-110'>
                        Let's talk
                    </button>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
