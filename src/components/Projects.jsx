import React from "react";
import Carousel from "./Carousel";
import github from "../assets/github.svg";
const Projects = () => {
  return (
    <section
      className=" h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-[#0d0e12]"
      id="Projects"
    >
      <div className="flex w-full items-center justify-center flex-col items-center">
        <h1 className="titleHeader NTR w-fit text-[#f77769] text-[33px]">
          Projects
        </h1>
        <span className="text-[60px] text-white NTR">
          built to enhance my skills and fueled by passion and creativity.
        </span>
      </div>
      <div className="flex w-7/12 mx-auto p-2">
        <Carousel />
      </div>

      <img
        src={github}
        alt="Coding SVG"
        className="absolute top-10 m-6 left-6 w-[110px] h-[110px] opacity-75"
        style={{ zIndex: 1 }}
      />
    </section>
  );
};

export default Projects;
