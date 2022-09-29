import React from "react";
import githubimg from '../img/Vector.png'
import telimg from '../img/tal.png'
import mailimg from '../img/mail.png'
import instra from '../img/instra.png'
import tail from '../img/tailwindimg.png'

function Footer(){
    return (
        <div className="footer ">
            <div className="contact flex flex-col justify-center items-center">
                <div className="text-topic text-[30px]">
                    <span className="mr-4   text-blue-700">Contact</span>
                    <span className=" text-blue-800">Me</span>
                </div>

                <div className="each-box flex flex-col md:flex-row  text-[20px]">
                    <div className="box-1 m-4 bg-indigo-300 shadow-lg shadow-indigo-500/50  drop-shadow-xl p-[30px] rounded-xl flex flex-col items-center justify-center">
                        <img src={githubimg} alt="" className="mb-[10px]" />
                        <p>Git Hub</p>
                    </div>
                    <div className="box-2 bg-indigo-300 shadow-lg shadow-indigo-500/50  m-4 drop-shadow-xl p-[30px] rounded-xl flex flex-col items-center justify-center">
                        <img src={instra} alt="" />
                        instargram
                    </div>
                    <div className="box-3 bg-indigo-300 shadow-lg shadow-indigo-500/50  m-4 drop-shadow-xl p-[30px] rounded-xl flex flex-col items-center justify-center">
                        <img src={mailimg} alt=""  className="mb-[25px]"/>
                        Email
                    </div>
                    <div className="box-4 bg-indigo-300 shadow-lg shadow-indigo-500/50  m-4 drop-shadow-xl p-[30px] rounded-xl flex flex-col items-center justify-center">
                        <img src={telimg} alt=""  className=""/>
                        Telp
                    </div>
                </div>
            </div>

            <div className="footer-text flex flex-col items-center p-10 text-[30px] text-blue-700 justify-center">
                Stack technology 
                <div className="flex flex-row">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt=""  className="w-[60px] m-3" />
                <img src={tail} alt="" className="w-[60px]"></img>
                </div>
                
            </div>
        </div>
    )
};

export default Footer;