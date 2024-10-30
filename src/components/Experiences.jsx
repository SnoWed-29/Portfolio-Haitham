import React, { useState } from 'react';
import experiencesData from '../data/experiences.json';
import fileCode from "../assets/fileCode.svg";
import coding from "../assets/coding.svg";
const Experiences = () => {
  const [selectedExperience, setSelectedExperience] = useState(experiencesData.experience[0]);

  return (
    <section className=' h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[#f77769]' id='Experience'>
      <div className="flex w-7/12 px-4 py-2   my-2  ">
          <h1 className="text-[46px] text-[#0d0e12] w-full flex justify-between items-center">
            <span className="titleHeader NTR w-fit ">/ about me</span>
            <div className="w-4/5 h-[3px]  bg-[#0d0e12] "></div>
          </h1>
        </div>
      <div className="flex space-x- w-7/12 mx-auto   p-1 rounded-b-xl">
        <div className="w-1/3 p-4 flex flex-col space-y-3">
          {experiencesData.experience.map((exp, index) => (
            <span
              key={index}
              onClick={() => setSelectedExperience(exp)}
              className='w-full border-r-2 border-r-[#96f8f8] text-[#0d0e12] bg-[#f6f6f6] hover:cursor-pointer text-[20px] font-semibold px-6 py-4 NTR'>
              {exp.company}
            </span>
          ))}
        </div>
        <div className="w-2/3 p-4 flex flex-col space-y-3 px-6 py-4 h-[390px] overflow-y-auto">
          <h1 className='text-[#0d0e12] NTR text-[33px]'>{selectedExperience.title} <span className='NTR text-[33px] text-[#96f8f8]'>@{selectedExperience.company}</span></h1>
          <span className='text-[#96f8f8] text-[20px] NTR'>{selectedExperience.duration}</span>
          <ul className='text-justify'>
            {selectedExperience.responsibilities.map((responsibility, index) => (
              <li key={index} className='my-1'>
                <p className='text-[20px] NTR'>
                  <i className="fa-solid fa-play text-xs mx-4"></i> {responsibility}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <img
        src={fileCode}
        alt="Hero Background"
        className="absolute right-0 bottom-0 w-2/4 h-3/4 object-contain opacity-50"
        style={{ zIndex: 0 , color: "red"}}
      />
      <img
        src={coding}
        alt="Coding SVG"
        className="absolute top-10 m-6 left-6 w-[110px] h-[110px] opacity-75"
        style={{ zIndex: 1 }}
      />
    </section>
  );
}

export default Experiences;
