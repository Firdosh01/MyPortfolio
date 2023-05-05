import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { Rings } from 'react-loader-spinner';
import { useState } from 'react';

function App() {
  // const [show, setShow] = useState(false);
  // const [loading, setLoading] = useState(false);

  // const helloHandeler = () => {
  //   setTimeout(() => {
  //     setLoading(true)
  //   }, 2000)
  // };

  return (
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
