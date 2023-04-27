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
        <div>

            <div>
                <div>
                    <p>Experience</p>
                    <p>These are the technologies I've worked with</p>
                </div>

                <div>
                    {
                        techs.map(({ id, src, title, style }) => (
                            <div>
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
