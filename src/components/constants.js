import {
  AiFillHtml5,
} from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { BsBootstrapFill } from "react-icons/bs";
import {
  SiTailwindcss,
  SiRedux,
} from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact, FaNodeJs } from "react-icons/fa";

/* project */
import TictactoeGame from '../assets/TictactoeGame.PNG'
import DevDetective from '../assets/DevDetective.PNG'
import ShoppingCart from '../assets/shopping.PNG'
import StudyNotion from '../assets/study.PNG'
import unsplash from '../assets/unsplash.PNG'
import decore from '../assets/decore.PNG'

/* social icons */
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

/* skills  */
export const skills = {
  frontend: [
    {
      id: "HTML5",
      label: "HTML5",
      icon: <AiFillHtml5  size={25} />,
      width: 80,
    },
    {
      id: "CSS3",
      label: "CSS3",
      icon: <DiCss3  size={25} />,
      width: 85,
    },
    {
      id: "Javascript",
      label: "Javascript",
      icon: <TbBrandJavascript  size={25} />,
      width: 80,
    },
    {
      id: "React Js",
      label: "React Js",
      icon: <FaReact size={25} />,
      width: 90,
    },
  ],
  backend: [
    {
      id: "Express Js",
      label: "Express Js",
      icon: <TbBrandJavascript  size={25} />,
      width: 30,
    },
    {
      id: "Node Js",
      label: "Node Js",
      icon: <FaNodeJs  size={25} />,
      width: 30,
    },
    {
      id: "Mongoose",
      label: "Mongoose",
      // icon: <Mongoose color="var(--theme)" size={45} />,
      width: 30,
    },
  ],
  frameworks: [
    {
      id: "Bootstrap",
      label: "Bootstrap",
      icon: <BsBootstrapFill  size={24} />,
      width: 60,
    },
    {
      id: "Tailwind CSS",
      label: "Tailwind CSS",
      icon: <SiTailwindcss  size={25} />,
      width: 80,
    },
  ],
  "state management": [
    {
      id: "React Redux",
      label: "React Redux",
      icon: <SiRedux  size={25} />,
      width: 30,
    },
    {
      id: "Redux Toolkit",
      label: "Redux Toolkit",
      icon: <SiRedux  size={25} />,
      width: 35,
    },
  ],
};

/*  project  */
export const projects = [
    {
      id: 1,
      src: StudyNotion,
      name: "StudyNotion-Ed-tech platform",
      desc: "StudyNotion: Ed-tech platform using MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS). Users create, consume, and rate educational content",
      demo: "https://studynotion-project.netlify.app",
      code: "https://github.com/Firdosh01/StudyNotion"
    },
    {
      id: 2,
      src: ShoppingCart,
      name: "Qkart Mini-Ecommerce application",
      desc: "Built a compact React JS Ecommerce app with user authentication, easy 'add to cart,' and streamlined product removal..",
      demo: "https://firdosh-qkart-frontend.netlify.app",
      code: "https://github.com/Firdosh01/Qkart"
    },
    {
      id: 3,
      src: decore,
      name: "Home Decore website",
      desc: "Developed a captivating home decor website using React.js, translating Figma designs into a responsive and interactive user experience.",
      demo: "https://selhono.vercel.app/",
      code: "https://github.com/Firdosh01/Selhono"
    },
    {
      id: 4,
      src: unsplash,
      name: "Unsplash Image search",
      desc: "Created a user-friendly image search app in React.js, connected to Unsplash API for quick searches. Made browsing smoother with 20 images displayed per page.",
      demo: "https://unsplash-image-search-firdosh.vercel.app",
      code: "https://github.com/Firdosh01/unsplash-image-search"
    },
    {
      id: 5,
      src: TictactoeGame,
      name: "Tic-tac toe game",
      desc: "Creating a Tic Tac Toe game in JavaScript involves structuring the game board, implementing player turns, checking for a win, and handling user interactions",
      demo: "https://tic-tac-toe-gamedrago.netlify.app",
      code: "https://github.com/Firdosh01/Tic-Tac-Toe-Game"
    },
    {
      id: 6,
      src: DevDetective,
      name: "Github profile finder",
      desc: "Created a user-friendly interface using HTML, CSS, and JavaScript, users to search by GitHub usernames, and app utilizes  GitHub API to fetch and relevant user data display it",
      demo: "https://github-finder-7df9e5.netlify.app",
      code: "https://github.com/Firdosh01/Github-finder"
    },
  
  ]

  /* social links  */
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

/* navigation  */
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
    link: "skills",
  },
  {
    id: 4,
    link: "projects",
  },
  {
    id: 5,
    link: "contact",
  },
];