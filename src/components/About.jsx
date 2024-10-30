import React from "react";
import avatar from "../assets/imges/avatar.jpg";
import hand from "../assets/hand.svg";
import coffee from "../assets/coffee.svg";
const About = () => {
  return (
    <section
      id="About"
      className=" w-full h-screen flex flex-col items-center justify-center relative overflow-hidden"
    >
      <div className="w-7/12 mx-auto  z-0">
        <div className="flex w-full px-4 py-2 bg-white rounded-xl shadow-xl my-2">
          <h1 className="text-[46px] text-[#0d0e12] w-full flex justify-between items-center">
            <span className="titleHeader NTR w-fit ">/ about me</span>
            <div className="w-4/5 h-[3px]  bg-[#0d0e12] "></div>
          </h1>
        </div>
        {/*  */}
        <div className="flex shadow-xl bg-[#f6f6f8] rounded-xl">
          <div className="flex justify-between my-1  p-4">
            <div className="flex w-3/5   p-4 flex-col">
              <p className="text-[21px] NTR text-justify">
                I am currently a{" "}
                <span className="text-[#f77769] NTR">Software Development</span>{" "}
                student at Ynov Campus in Casablanca, actively working on
                personal projects to sharpen my
                <span className="text-[#f77769] NTR"> skills</span> and explore
                new tech.
              </p>

              <div className="flex flex-col">
                <h4 className="NTR my-2 text-[21px]">
                  Here are some technologies I have been working with:
                </h4>
                <ul className="flex justify-around  w-2/3">
                  <div className="flex flex-col space-y-2">
                    <li className="text-[21px] NTR">
                      <i class="fa-solid fa-play text-xs mx-4"></i>Php/Laravel
                    </li>
                    <li className="text-[21px] NTR">
                      <i class="fa-solid fa-play text-xs mx-4"></i>React.js
                    </li>
                    <li className="text-[21px] NTR">
                      <i class="fa-solid fa-play text-xs mx-4"></i>React Native
                    </li>
                  </div>
                  <div className="flex flex-col space-y-2 px-0">
                    <li className="text-[21px] NTR">
                      <i class="fa-solid fa-play text-xs mx-4"></i>Firebase
                    </li>
                    <li className="text-[21px] NTR">
                      <i class="fa-solid fa-play text-xs mx-4"></i>Mysql/MongoDb
                    </li>
                    <li className="text-[21px] NTR">
                      <i class="fa-solid fa-play text-xs mx-4"></i>Git
                    </li>
                  </div>
                </ul>
              </div>
              <p className="NTR text-[21px] my-4">
                Outside of Studies, I'm interested in following the developments
                of Computer science. I also play a lot of video games.
              </p>
            </div>
            <div className="flex w-2/5  justify-center p-4">
              <img
                src={avatar}
                alt="avatar"
                height={300}
                width={300}
                className=" shadow-xl rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-around my-2 rounded-xl bg-[#0d0e12] text-white w-7/12 mx-auto p-4">
        <a href="" className="hover:text-[#4078c0]  text-4xl">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="" className="hover:text-[#0a66c2]  text-4xl">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="" className="hover:text-[#f77769] text-4xl">
          <i class="fa-solid fa-envelope"></i>
        </a>
      </div>
    </section>
  );
};

export default About;
