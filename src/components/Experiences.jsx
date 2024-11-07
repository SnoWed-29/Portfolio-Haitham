import React, { useState } from "react";
import experiencesData from "../data/experiences.json";
import fileCode from "../assets/fileCode.svg";
import coding from "../assets/coding.svg";

const Experiences = () => {
  const [selectedExperience, setSelectedExperience] = useState(
    experiencesData.experience[0]
  );

  return (
    <section
      className="h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[#f77769] "
      id="Experience"
    >
      <div className="flex justify-center w-11/12 md:w-11/12 lg:w-11/12 xl:w-7/12 px-4 py-2 my-2 z-10">
        <h1 className="titleHeader  text-center NTR w-fit text-[#f8f8f6] text-[43px]">
          Professional Experience
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row w-full lg:w-7/12 mx-auto p-1 rounded-b-xl z-10">
        <div className="w-full md:w-1/3 p-4 flex flex-col space-y-3">
          {experiencesData.experience.map((exp, index) => (
            <span
              key={index}
              onClick={() => setSelectedExperience(exp)}
              className={`shadow-xl w-full border-r-2 border-r-[#96f8f8] text-[#0d0e12] text-[20px] font-semibold px-6 py-4 NTR hover:cursor-pointer
                ${
                  selectedExperience === exp
                    ? "bg-[#0d0e12] text-[#f6f6f6]"
                    : "bg-[#f6f6f6]"
                }`}
            >
              {exp.company}
            </span>
          ))}
        </div>
        <div className="w-full md:w-2/3 p-4 flex flex-col space-y-3 px-6 py-4 overflow-y-auto bg-[#0d0e12] max-h-fit-content shadow-xl z-10">
          <h1 className="text-[#f6f6f6] NTR text-[33px]">
            {selectedExperience.title}{" "}
            <span className="NTR text-[33px] text-[#96f8f8]">
              @{selectedExperience.company}
            </span>
          </h1>
          <span className="text-[#96f8f8] text-[20px] NTR">
            {selectedExperience.duration}
          </span>
          <ul className="text-justify text-[#f6f6f6]">
            {selectedExperience.responsibilities.map(
              (responsibility, index) => (
                <li key={index} className="my-1">
                  <p className="text-[20px] NTR">
                    <i className="fa-solid fa-play text-xs mx-4"></i>{" "}
                    {responsibility}
                  </p>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      <img
        src={fileCode}
        alt="Hero Background"
        className="absolute right-0 bottom-0 w-2/4 h-3/4 object-contain opacity-50"
        style={{ zIndex: 0 }}
      />
      <img
        src={coding}
        alt="Coding SVG"
        className="absolute top-10 m-6 left-6 w-[110px] h-[110px] opacity-75"
        style={{ zIndex: 1 }}
      />
    </section>
  );
};

export default Experiences;
