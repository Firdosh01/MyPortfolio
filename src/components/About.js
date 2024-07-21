import React from "react";

function About() {
  return (
    <div name="about" className="w-full text-black bg-white  dark:bg-[#1c1a1b]">
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 pt-12 mx-auto ">
        <div className="fade-in">
          <p className="inline p-2 text-4xl font-bold text-black border-b-4 border-gray-500 dark:text-white">
            About me
          </p>
        </div>
        <p className="px-1 mt-12 text-lg text-black md:text-xl dark:text-white fade-in md:px-4 ">
          Hello, my name is Md Firdosh from Dhanbad, I completed my BCA degree from Indira
          Gandhi Open University in 2024, currently working as a
          front-end developer at Teckat Service Private Limited. I am
          experienced in developing responsive web applications using React.js
          and am aspiring to become a MERN stack developer.
        </p>
      </div>
    </div>
  );
}

export default About;
