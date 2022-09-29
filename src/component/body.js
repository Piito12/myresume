import React from "react";
import ecommerceimg from "../img/e-commerce.png";
import beattext from "../img/Beats.png";
import beatimg from "../img/Beatsimg.png";
import sendimg from "../img/SendPay.png";
import logoE from "../img/E.png";
import jsing from "../img/JSimg.png";
import tail from "../img/tailwindimg.png";

function Body() {
  return (
    <div className="body">
      <div className="additional flex flex-col justify-center items-center m-10 ">
        <div className="topic-additional text-[30px] mb-4">
          <span className="mr-4 text-blue-400">Additional</span>
          <span className="text-blue-800">Passion</span>
        </div>
        <div className="each-box flex flex-col md:flex-row text-[20px] ">
          <div className="box-1 bg-indigo-300 shadow-lg shadow-indigo-500/50  m-4 drop-shadow-xl rounded-xl w-[510px] ">
            <div className="detail flex flex-col items-center">
              <div className="imgstack flex flex-row items-center justify-center">
                <img src={jsing} alt="" className="w-[30px] m-3" />
                <img src={tail} alt="" className="w-[30px] m-3" />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                  alt=""
                  className="w-[40px] m-3"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
                  alt=""
                  className="w-[40px] h-[40px] m-3"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
                  alt=""
                  className="w-[40px] m-3"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
                  alt=""
                  className="w-[30px] m-3"
                />
              </div>

              <h1>Fron-End Delveloper</h1>
              <p>(HTML,CSS,JavaScript,React,Bootesrap,Tailwind)</p>
            </div>
          </div>
          <div className="box-2 bg-indigo-300 shadow-lg shadow-indigo-500/50  m-4 drop-shadow-xl p-[30px] rounded-xl w-[500px]">
            <div className="detail flex flex-col items-center">
              <div className="imgstack flex flex-row items-center justify-center">
                <img src={jsing} alt="" className="w-[30px] m-3" />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                  alt=""
                  className="w-[40px] m-3"
                />
                <img
                  src="https://race.nstru.ac.th/home_ex/blog/pic/cover/s4200.jpg"
                  alt=""
                  className="w-[40px] m-3"
                />
                <img
                  src="https://www.4x-treme.com/wp-content/uploads/2019/06/jenkins-300x300.png"
                  alt=""
                  className="w-[40px] m-3"
                />
              </div>

              <h1>Back-End Developer</h1>
              <p>(JavaScript,NodeJs,Docker,Jenkins)</p>
            </div>
          </div>
          <div className="box-3 bg-indigo-300 shadow-lg shadow-indigo-500/50  m-4 p-[30px] rounded-xl w-[500px]">
            <div className="detail flex flex-col items-center">
              <div className="imgstack flex flex-row items-center justify-center">
                <img
                  src="https://www.svgrepo.com/show/303251/mysql-logo.svg"
                  alt=""
                  className="w-[50px] m-3"
                />
                <img
                  src="https://miro.medium.com/max/640/1*doAg1_fMQKWFoub-6gwUiQ.png"
                  alt=""
                  className="w-[40px] m-3"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png"
                  alt=""
                  className="w-[60px] m-3"
                />
              </div>
              <h1>Data Base</h1>
              <p>(SQL,MySql,MongoDB)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio flex flex-col items-center justify-center mb-10  text-[20px]">
        <div className="topic-port text-[30px] mb-4">
          <span className="text-blue-400"> My</span>
          <span className="text-blue-800"> Portfolio</span>
        </div>
        <div className="each-box flex flex-col md:flex-row ">
          <div className="box-1 bg-slate-100 shadow-lg shadow-indigo-500/50  m-4 p-[30px] rounded-xl">
            <h1 className="text-slate-800 text-[30px]">E-Commerce</h1>
            <div className="circle bg-slate-500 w-[300px] h-[300px] rounded-[300px] relative">
              <img src={ecommerceimg} alt="" className="absolute top-[100px] left-[10px]" />
            </div>
            
          </div>
          <div className="box-2  text-zinc-100 m-4 bg-amber-700 shadow-lg shadow-indigo-500/50  p-[30px] rounded-xl">
            <img src={beattext} alt="" />
            <div className="circle bg-amber-900 w-[300px] h-[300px] rounded-[300px] relative">
              <img src={beatimg} alt="" className="absolute top-[100px] left-[10px]" />
            </div>
          </div>
          <div className="box-3  m-4 bg-violet-400 shadow-lg shadow-indigo-500/50  p-[30px] rounded-xl">
            <div className="flex flex-row">
                <img src={logoE} alt="" />
                <h1 className="ml-[20px] text-[30px] text-violet-800">SendPay</h1>
            </div>
            
            <div className="circle bg-violet-600 w-[300px] h-[300px] rounded-[300px] relative">
              <img src={sendimg} alt="" className="absolute top-[100px] left-[10px]" />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
