import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [animatedElements, setAnimatedElements] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-in");
      const animatedElementsArray = Array.from(elements).filter((element) => {
        const rect = element.getBoundingClientRect();
        const offset = window.innerHeight - rect.height / 2;
        return rect.top < offset;
      });
      setAnimatedElements(animatedElementsArray);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Add animation class to elements in view
    animatedElements.forEach((element) => {
      element.classList.add("animate");
    });
  }, [animatedElements]);

  return (
    <div className={darkMode && "dark"}>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home darkMode={darkMode} />
      <About />
      <Skills darkMode={darkMode} />
      <Projects />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
