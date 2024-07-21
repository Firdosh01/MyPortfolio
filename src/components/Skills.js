import React from "react";
import { frontend, backend, otherskill } from "./constants";
import { skills } from "./constants";
function Skills({ darkMode }) {
  const skillEntries = Object.entries(skills);

  return (
    <div
      name="skills"
      className="w-full text-black bg-white  dark:bg-[#1c1a1b]"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 pt-12 mx-auto text-white">
        <div className="fade-in">
          <p className="inline p-2 text-4xl font-bold text-black border-b-4 border-gray-500 dark:text-white">
            Skills
          </p>
          <p className="py-6 text-black dark:text-white">
            These are the technologies I've worked with
          </p>
          {/* <p
            className={`inline p-2 text-md dark:text-white text-black ${
              darkMode ? "whiteSharedSubTitle" : "blackSharedSubTitle"
            }`}
          >
            Front-End
          </p> */}
        </div>

        <div className="skillsContainer">
      {/* <div className="sharedSubTitle">skillsTitle</div> */}
      <div className="grid grid-cols-1 gap-8 px-0 md:px-4 md:grid-cols-2 lg:grid-cols-2 ">
        {skillEntries.map((skill, index) => (
          <div className="skillGridItem dark:!bg-[#404040] !bg-[#115566] fade-in  rounded-lg" key={index}>
            <div className="gridItemTitle">{skill[0]}</div>
            <div className="gridItemStatsContainer">
              {skill[1].map((stat) => (
                <React.Fragment key={stat.id}>
                  <div className="gridStatTitleContainer dark:!text-[#da5724] !text-[#C0EFEF]">
                    <div className="gridStatTitle dark:!text-[#a5a5a5] text-white">{stat.label}</div>
                    {stat.icon}
                  </div>
                  <div className="statbarContainer">
                    <div
                      className="statbar dark:!bg-[#da5724] !bg-[#C0EFEF]"
                      style={{ width: `${stat.width}%` }}
                    />
                    <span className="statPercentage dark:text-[#da5724] text-[#C0EFEF]">{stat.width}%</span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>


        {/* <div className="grid w-full gap-8 px-0 py-8 text-center md:px-4 sm:grid-cols-2 md:grid-cols-3">
          {frontend.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg dark:bg-transparent bg-[#d1d1dc]  bgslate-100 ${style} fade-in`}
            >
              <img
                src={src}
                alt={title}
                className="w-20 mx-auto mb-3 select-none"
              />
              <p className="text-black dark:text-white"> {title}</p>
            </div>
          ))}
        </div>

        <div className="fade-in">
          <p
            className={`inline p-2 text-md dark:text-white text-black ${
              darkMode ? "whiteSharedSubTitle" : "blackSharedSubTitle"
            }`}
          >
            Back-End
          </p>
        </div>

        <div className="grid w-full gap-8 px-1 py-8 text-center md:px-4 sm:grid-cols-2 md:grid-cols-3">
          {backend.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 dark:bg-transparent bg-[#d1d1dc] py-4 rounded-lg ${style} fade-in bgslate-100`}
            >
              <img
                src={src}
                alt={title}
                className="w-20 mx-auto mb-3 select-none"
              />
              <p className="text-black dark:text-white"> {title}</p>
            </div>
          ))}
        </div>

        <div className="fade-in">
          <p
            className={`inline p-2 text-md dark:text-white text-black ${
              darkMode ? "whiteSharedSubTitle" : "blackSharedSubTitle"
            }`}
          >
            Other-Softwares
          </p>
        </div>

        <div className="grid w-full gap-8 px-1 py-5 text-center md:px-4 sm:grid-cols-2 md:grid-cols-3">
          {otherskill.map(({ id, src, title, style, width }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 bg-[#d1d1dc] dark:bg-transparent duration-500 py-4 rounded-lg ${style} fade-in bgslate-100`}
            >
              <img
                src={src}
                alt={title}
                className={`w-20 mx-auto mb-3  ${width} select-none`}
              />
              <p className="text-black dark:text-white"> {title}</p>
            </div>
          ))}
        </div> */}



      </div>
    </div>
  );
}

export default Skills;
