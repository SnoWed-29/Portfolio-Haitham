import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full px-6 py-3 flex justify-between shadow-md border-b bg-[#f6f6f8] border-b-[#96f8f8] fixed z-10">
      <div className="flex space-x-5 mx-auto w-full md:w-full lg:w-3/5  p-1 ">
        <a
          href="#"
          className="font-semibold text-[#0d0e12] hover:text-[#f77769]"
        >
          Home
        </a>
        <span className="text-[#f77769] font-semibold">/</span>
        <a
          href="#Experiences"
          className="font-semibold text-[#0d0e12] hover:text-[#f77769]"
        >
          Experiences
        </a>
        <span className="text-[#f77769] font-semibold">/</span>

        <a
          href="#Projects"
          className="font-semibold text-[#0d0e12] hover:text-[#f77769]"
        >
          Projects
        </a>
        <span className="text-[#f77769] font-semibold">/</span>

        <a
          href="#About"
          className="font-semibold text-[#0d0e12] hover:text-[#f77769]"
        >
          About
        </a>
      </div>
      <div className="flex space-x-4 justify-end text-[#0d0e12] text-2xl w-1/3">
        <a href="" className="hover:text-[#4078c0]">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="" className="hover:text-[#0a66c2]">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="" className="hover:text-[#f77769]">
          <i class="fa-solid fa-envelope"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
