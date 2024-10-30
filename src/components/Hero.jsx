import React from "react";
import Typewriter from "typewriter-effect";
import heroBackground from "../assets/heroBackground.svg";
import coding from "../assets/coding.svg";
import webdevelopment from "../assets/webdevelopment.svg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full h-screen bg-[#0d0e12] flex justify-center items-center relative overflow-hidden"
    >
      {/* Centered SVG Background */}
      <img
        src={heroBackground}
        alt="Hero Background"
        className="absolute right-0 bottom-0 w-2/4 h-3/4 object-contain opacity-50"
        style={{ zIndex: 0 }}
      />

      {/* Top-left SVG */}
      <img
        src={coding}
        alt="Coding SVG"
        className="absolute top-10 m-6 left-6 w-[110px] h-[110px] opacity-75"
        style={{ zIndex: 1 }}
      />

      {/* Top-right SVG */}
      <img
        src={webdevelopment}
        alt="Programs SVG"
        className="absolute top-11 m-6 right-6 w-[110px] h-[110px] opacity-75"
        style={{ zIndex: 1 }}
      />

      {/* Bottom-left SVG */}

      {/* Main Content */}
      <div className="flex w-11/12 md:w-9/12 lg:w-3/5 p-3 justify-center relative z-2">
        <div className="flex flex-col items-center">
          <h1 className="text-[86px] text-[#f6f6f8] font-bold NTR">
            <span className="NTR flex flex-col items-center md:flex-row w-full ">
              Hi, I'm&nbsp;
              <span className="text-[#f77769]  flex">
                <span className="NTR">Haitham</span>
                <span className="text-[61px] mt-1 NTR">
                  <Typewriter
                    options={{
                      strings: [""],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </span>
            </span>
          </h1>
          <p className="text-[22px] w-4/5 text-center text-[#f6f6f8] leading-10">
            I'm a passionate software developer from Casablanca, currently in my
            third year of a Bachelor’s in Computer Science. I love building web
            apps that simplify daily life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
