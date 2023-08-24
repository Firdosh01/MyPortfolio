import React from 'react'
import { frontend, backend, otherskill} from './constants'

function Experience({darkMode}) {

    return (
        <div name="experience" className='w-full text-black bg-white dark:bg-gradient-to-b dark:from-gray-800 dark:to-black'>

            <div className='flex flex-col justify-center w-full h-full max-w-screen-lg p-4 pt-12 mx-auto text-white'>
                <div>
                    <p className='inline p-2 text-4xl font-bold text-black border-b-4 border-gray-500 dark:text-white'>Experience</p>
                    <p className='py-6 text-black dark:text-white'>These are the technologies I've worked with</p>
                    <p className={`inline p-2 text-md dark:text-white text-black ${darkMode ? "whiteSharedSubTitle" : "blackSharedSubTitle"}`}>Front-End</p>
                </div>

                <div className='grid w-full gap-8 px-12 py-8 text-center sm:grid-cols-2 md:grid-cols-3 sm:px-0'>
                    {
                        frontend.map(({ id, src, title, style }) => (
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg dark:bg-transparent bg-slate-100 ${style}`}>
                                <img src={src} alt={title} className='w-20 mx-auto mb-3' />
                                <p className='text-black dark:text-white'> {title}</p>
                            </div>

                        ))
                    }
                </div>

                <div>
                    <p className={`inline p-2 text-md dark:text-white text-black ${darkMode ? "whiteSharedSubTitle" : "blackSharedSubTitle"}`}>Back-End</p>
                </div>

                <div className='grid w-full gap-8 px-12 py-8 text-center sm:grid-cols-2 md:grid-cols-3 sm:px-0'>
                    {
                        backend.map(({ id, src, title, style }) => (
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 dark:bg-transparent bg-slate-100 py-2 rounded-lg ${style}`}>
                                <img src={src} alt={title} className='w-20 mx-auto mb-3' />
                                <p className='text-black dark:text-white'> {title}</p>
                            </div>

                        ))
                    }
                </div>

                <div>
                    <p className={`inline p-2 text-md dark:text-white text-black ${darkMode ? "whiteSharedSubTitle" : "blackSharedSubTitle"}`}>Other-Softwares</p>
                </div>

                <div className='grid w-full gap-8 px-12 py-5 text-center sm:grid-cols-2 md:grid-cols-3 sm:px-0'>
                    {
                        otherskill.map(({ id, src, title, style, width }) => (
                            <div key={id} className={`shadow-md hover:scale-105 bg-slate-100 dark:bg-transparent duration-500 py-2 rounded-lg ${style}`}>
                                <img src={src} alt={title} className={`w-20 mx-auto mb-3  ${width}`} />
                                <p className='text-black dark:text-white'> {title}</p>

                            </div>

                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Experience
