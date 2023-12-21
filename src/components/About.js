import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full text-black bg-white dark:bg-gradient-to-b dark:to-black dark:from-gray-800"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 pt-12 mx-auto fade-in">
        <div>
          <p className="inline p-2 text-4xl font-bold text-black border-b-4 border-gray-500 dark:text-white">
            About
          </p>
        </div>
        <p className="mt-12 text-xl text-black dark:text-white">
          Hello <span>👋</span>, my name is Md Firdosh, from Dhanbad. Currently
          in my 3th year of BCA studies at Indira Gandhi Open University, I
          proudly represent the dedication of a middle-class background. As a
          front-end developer, i have 1.5+ years hands on experience in creating
          responsive layouts, implementing design, and developing
          interactive website using Frontend technologies, aspiring to become a
          MERN stack developer.
        </p>
      </div>
    </div>
  );
}

export default About;
