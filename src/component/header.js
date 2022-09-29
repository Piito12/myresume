import React from "react";
import logo from "../img/Photo.png";

function Header() {
  return (
    <div className="header">
      <div className="nav-bar flex flex-row justify-between  p-[40px]">
        <div className="text-[30px] ">
          <span className="mr-3 text-blue-800 ">Sitthipong</span>
          <span className="text-blue-500">Wongpratum</span>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 block md:hidden "
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

        <div className="nav-right flex-row text-xl items-center justify-center  hidden md:flex sm:flex  ">
          <p className="mr-10 p-1">about</p>
          <p className="mr-10 p-1">Passion</p>
          <p className="mr-10 p-1">Portfolio</p>
          <p className="mr-10 bg-blue-400 shadow-lg shadow-blue-500/50 p-2 text-gray-200 rounded-xl ">
            Contact Me
          </p>
        </div>
      </div>

      <div className="suggestion flex flex-col-reverse justify-center  md:flex-row ">
        <div className="box-left p-[50px] w-[500px] text-blue-800   ">
          <h1 className="text-[30px]">Hi !</h1>
          <p className="text-[40px] text-blue-900 mb-5">
            I'm Sitthipong Wongpratum. Software Engineer
          </p>
          <p className="text-xl text-slate-900">
            Front-End developer based in Thailand,I'am coding with a
            clean and beautiful problem solving in mind.
          </p>
        </div>
        <div className="box-right h-[400px] ml-0 mb-[100px] md:ml-[400px] flex items-center p-10 pt-[150px]">
          
          <div className="bg-red-400 w-[500px] h-[500px] rounded-full relative">
          <img
            src={logo}
            alt=""
            className="rounded-full w-[300px] h-[300px]  z-30 absolute top-[100px]  left-[100px]"
          />
          <div className="w-[100px] h-[100px] absolute bg-fuchsia-600 rounded-full left-7"></div>
          <div className="w-[100px] h-[100px] absolute bg-red-600 rounded-full left-[300px]"></div>
          <div className="w-[100px] h-[100px] absolute bg-blue-600 rounded-full left-[100px] top-[300px]"></div>
          <div className="w-[100px] h-[100px] absolute bg-sky-600 rounded-full left-[400px] top-[300px]"></div>
          <div className="w-[100px] h-[100px] absolute bg-violet-600 rounded-full left-7 top-[400px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
