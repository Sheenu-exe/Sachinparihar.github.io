"use client"
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";

const Hero = () => {
    return(
        <div id="home" className="flex flex-col h-screen overflow-x-hidden gap-y-2 justify-center items-center">
            <div className="left h-fit  sm:w-[50vw] w-full flex flex-col justify-center items-center flex-shrink-0">

                <img className="h-24 w-24 sm:m-10 m-5 sm:mb-5 mb-5 rounded-full object-cover" src={"https://i.ibb.co/jTB0hQ5/prof.jpg"} alt="" />
                <p className="sm:text-6xl  mx-3 sm:mx-0 text-5xl  text-center my-2">Hello! I'm Sachin</p>
            </div>
            <div className="middle h-fit flex text-center flex-col gap-2 items-center justify-center">
                <p className="sm:text-3xl sam:m-0  text-3xl mx-3">A Fullstack Developer based in Pune,India.</p>
                <p className="text-gray-600 mx-3">Designing User-Centric Experiences with Precision and Creativity</p>
                <div className="flex my-3 gap-x-3 mx-3">
                    <a className=" hover:bg-white border hover:border-zinc-500 border-white px-2 py-2 hover:text-black hover:border rounded-lg bg-black transition-all text-white" href="tel:+918668369314">Contact Me</a>
                <a className="hover:bg-white border hover:border-zinc-500 border-white px-2 py-2 hover:text-black hover:border rounded-lg bg-black transition-all text-white" href="#projects">See My Work</a>
                </div>
            </div>
            <div className="right h-fit w-fit flex justify-center items-center">
                <ul className="flex w-full justify-around  sm:gap-5 ">
                    <li className="w-12 h-12 bg-white text-black flex justify-center items-center group-hover:bg-black border rounded-full group-hover"><a title="X (Twitter)" href="https://twitter.com/Sheenu_exe"><RiTwitterXFill className="text-3xl group-hover group-hover:fill-white"/></a></li>
                    <li className="w-12 h-12 bg-white text-black flex justify-center items-center border rounded-full"><a title="Instagram" href="https://www.instagram.com/sachinn.code/"><FaInstagram className="text-3xl"/></a></li>
                    <li className="w-12 h-12 bg-white text-black flex justify-center items-center border rounded-full"><a title="Github" href="https://github.com/Sheenu-exe"><FaGithub className="text-3xl"/></a></li>
                    <li className="w-12 h-12 bg-white text-black flex justify-center items-center border rounded-full"><a title="Mail" href="mailto:pariharsachin5002@gmail.com"><MdOutlineMailOutline className="text-3xl"/></a></li>
                    <li className="w-12 h-12 bg-white text-black flex justify-center items-center border rounded-full"><a title="Call" href="tel:+918668369314"><IoCallSharp className="text-3xl"/></a></li>
                </ul>
            </div>
        </div>
    )
}
export default Hero