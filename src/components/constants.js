// Skils 
import html from '../assets/Experience/html.png'
import css from '../assets/Experience/css.png'
import tailwind from '../assets/Experience/tailwind.png'
import javascript from '../assets/Experience/javascript.png'
import react from '../assets/Experience/react.png'
import github from '../assets/Experience/github.png'
import nodejs from '../assets/Experience/nodejs.png'
import mongoDB from '../assets/Experience/MongoDB.svg'
import express from '../assets/Experience/Express.png'
import postman from '../assets/Experience/postman.png'
import vscode from '../assets/Experience/Vscode.png'

// Portfolio project
import Weather from '../assets/Weather.PNG'
import TictactoeGame from '../assets/TictactoeGame.PNG'
import DevDetective from '../assets/DevDetective.PNG'
import ShoppingCart from '../assets/shopping.PNG'
import StudyNotion from '../assets/study.PNG'
import unsplash from '../assets/unsplash.PNG'


// social icons
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

// skills 
export const frontend = [
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
    title: 'React Js',
    style: 'shadow-sky-400'
},
]

export const backend = [
    {
        id: 1,
        src: nodejs,
        title: 'Node Js',
        style: 'shadow-emerald-600'
    },
    {
      id: 2,
      src: express,
      title: 'Express Js',
      style: 'shadow-gray-400'
    },
    {
        id: 3,
        src: mongoDB,
        title: 'MongoDb',
        style: 'shadow-emerald-600'
    },
       
]

export const otherskill = [
  {
    id: 1,
    src: github,
    title: 'Github',
    style: 'shadow-gray-400',
   },
   {
    id: 2,
    src: postman,
    title: 'Postman',
    style: 'shadow-orange-500',
    width: 'w-[130px]'
    },
    {
      id: 3,
      src: vscode,
      title: 'VS code',
      style: 'shadow-sky-400',
    },
]



// portfolio project 
export const portfolios = [
    {
      id: 1,
      src: StudyNotion,
      demo: "https://studynotion-project.netlify.app",
      code: "https://github.com/Firdosh01/StudyNotion"
    },
    {
      id: 2,
      src: ShoppingCart,
      demo: "https://firdosh-qkart-frontend.netlify.app",
      code: "https://github.com/Firdosh01/Qkart"
    },
    {
      id: 3,
      src: Weather,
      demo: "https://weather-app-ba8a.netlify.app",
      code: "https://github.com/Firdosh01/WeatherApp"
    },
    {
      id: 4,
      src: unsplash,
      demo: "https://unsplash-image-search-firdosh.vercel.app",
      code: "https://github.com/Firdosh01/unsplash-image-search"
    },
    {
      id: 5,
      src: TictactoeGame,
      demo: "https://tic-tac-toe-gamedrago.netlify.app",
      code: "https://github.com/Firdosh01/Tic-Tac-Toe-Game"
    },
    {
      id: 6,
      src: DevDetective,
      demo: "https://github-finder-7df9e5.netlify.app",
      code: "https://github.com/Firdosh01/Github-finder"
    },

  ]

  // social links 
 export const sociallinks = [
    {
        id: 1,
        child: (
            <>
                LinkedIn <FaLinkedin size={30} />
            </>
        ),
        href: "https://www.linkedin.com/in/firdosh01/",
        style: 'rounded-tr-md'
    },
    {
        id: 2,
        child: (
            <>
                Github <FaGithub size={30} />
            </>
        ),
        href: "https://github.com/Firdosh01",
    }, 
    {
        id: 3,
        child: (
            <>
                Mail <HiOutlineMail size={30} />
            </>
        ),
        href: "mailto: mdfirdosha37@gmail.com",
    }, 
    {
        id: 4,
        child: (
            <>
                Resume <BsFillPersonLinesFill size={30} />
            </>
        ),
        href: "/Md_Firdosh-Resume.pdf",
        style: "rounded-br-md",
        download: true,
    }
]

// navigation 

export const navigation = [
  {
    id: 1,
    link: "home",
  },
  {
    id: 2,
    link: "about",
  },
  {
    id: 3,
    link: "portfolio",
  },
  {
    id: 4,
    link: "experience",
  },
  {
    id: 5,
    link: "contact",
  },
];