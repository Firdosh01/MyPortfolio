import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(true)
  return (

      <div className= {darkMode && "dark"}>
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Home darkMode={darkMode} />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
        <SocialLinks />
      </div>
  );
}

export default App;
