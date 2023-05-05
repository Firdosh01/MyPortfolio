import React from 'react'
import html from '../assets/Experience/html.png'
import css from '../assets/Experience/css.png'
import tailwind from '../assets/Experience/tailwind.png'
import javascript from '../assets/Experience/javascript.png'
import react from '../assets/Experience/react.png'
import github from '../assets/Experience/github.png'


function Experience() {

    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'Javascript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: react,
            title: 'React',
            style: 'shadow-sky-400'
        },
        {
            id: 1,
            src: github,
            title: 'Github',
            style: 'shadow-gray-400'
        },
    ]
    return (
        <div name="experience" className='w-full bg-gradient-to-b from-gray-800 to-black'>

            <div className='flex flex-col justify-center w-full h-full max-w-screen-lg p-4 pt-12 mx-auto text-white' data-aos="fade-up-left">
                <div>
                    <p className='inline p-2 text-4xl font-bold border-b-4 border-gray-500'>Experience</p>
                    <p className='py-6'>These are the technologies I've worked with</p>
                </div>

                <div className='grid w-full grid-cols-2 gap-8 px-12 py-8 text-center sm:grid-cols-3 sm:px-0' data-aos="zoom-in">
                    {
                        techs.map(({ id, src, title, style }) => (
                            <div key={id}>
                                <img src={src} alt="" />
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
