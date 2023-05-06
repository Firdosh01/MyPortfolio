import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import {  ThreeDots } from 'react-loader-spinner';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  const helloHandeler = () => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  };
  helloHandeler()


  return (
    loading ?
      <div className='wra'>
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div> :

      <div>
        <NavBar />
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Contact />

        <SocialLinks />
      </div>
  );
}

export default App;
