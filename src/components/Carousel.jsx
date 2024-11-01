import React, { useState, useEffect } from "react";
import projectData from "../data/projects.json";

const Carousel = () => {
  const [projects, setProjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setProjects(projectData.projects);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden rounded-lg bg-gray-900 text-white">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="min-w-full h-[570px] flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className="text-center px-4 bg-opacity-75 bg-[#f8f8f6] p-6 rounded-lg text-[#0d0e12]">
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="mb-2">{project.description}</p>
              <p className="text-[#f77769] mb-4">{project.techs.join(", ")}</p>
              <button
                className="px-4 py-2 bg-[#f77769] rounded text-white hover:opacity-75"
                onClick={() => (window.location.href = project.link)}
              >
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-gray-700 rounded-full p-2"
      >
        <i className="fa-solid fa-backward"></i>
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-gray-700 rounded-full p-2"
      >
        <i className="fa-solid fa-forward"></i>
      </button>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 mx-1 rounded-full ${
              index === currentIndex ? "bg-[#f77769]" : "bg-gray-500"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
