import React from 'react'
import { frontend, backend, otherskill} from './constants'

function Experience() {

    return (
        <div name="experience" className='w-full bg-gradient-to-b from-gray-800 to-black'>

            <div className='flex flex-col justify-center w-full h-full max-w-screen-lg p-4 pt-12 mx-auto text-white'>
                <div>
                    <p className='inline p-2 text-4xl font-bold border-b-4 border-gray-500'>Experience</p>
                    <p className='py-6'>These are the technologies I've worked with</p>
                    <p className='inline p-2 text-md sharedSubTitle'>Front-End</p>
                </div>

                <div className='grid w-full grid-cols-2 gap-8 px-12 py-8 text-center sm:grid-cols-3 sm:px-0'>
                    {
                        frontend.map(({ id, src, title, style }) => (
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={src} alt={title} className='w-20 mx-auto mb-3' />
                                <p> {title}</p>
                            </div>

                        ))
                    }
                </div>

                <div>
                    <p className='inline p-2 text-md sharedSubTitle'>Back-End</p>
                </div>

                <div className='grid w-full grid-cols-2 gap-8 px-12 py-8 text-center sm:grid-cols-3 sm:px-0'>
                    {
                        backend.map(({ id, src, title, style }) => (
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={src} alt={title} className='w-20 mx-auto mb-3' />
                                <p> {title}</p>
                            </div>

                        ))
                    }
                </div>

                <div>
                    <p className='inline p-2 text-md sharedSubTitle'>Other-Softwares</p>
                </div>

                <div className='grid w-full grid-cols-2 gap-8 px-12 py-5 text-center sm:grid-cols-3 sm:px-0'>
                    {
                        otherskill.map(({ id, src, title, style, width }) => (
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={src} alt={title} className={`w-20 mx-auto mb-3  ${width}`} />
                                <p> {title}</p>

                            </div>

                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Experience
