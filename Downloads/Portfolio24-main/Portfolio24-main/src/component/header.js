"use client"

import { PiFilePdfFill } from "react-icons/pi";
import { useState, useEffect } from "react";

export const Header = () => {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "experience","techstack", "projects", "about"];
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { href: "#home", label: "Home" },
        { href: "#experience", label: "Experience" },
        { href: "#techstack", label: "Tech Stack" },
        { href: "#projects", label: "Projects" },
        { href: "#about", label: "About" },
    ];

    return (
        <div className="items-center navbar fixed top-0 left-0 z-50 h-[10vh] backdrop-blur-sm gap-2 flex justify-between">
            <div className="flex items-center">
                <a className="text-xl flex items-center font-bold mx-2 h-10 w-auto">
                    <img className="h-10 w-auto" src={"https://i.ibb.co/KbjCwGW/original-36051dd8be8d73ec9caea4721bb8d807-removebg-preview.png"} alt="Logo"/>
                </a>
            </div>
            <ul className="sm:flex hidden px-1.5 py-1.5 gap-1.5 bg-black/50 rounded-md">
                {navItems.map((item) => (
                    <li key={item.href} className={`px-2 py-1 rounded-lg transition-all hover:ease-in-out cursor-pointer ${
                        activeSection === item.href.slice(1) 
                            ? "bg-white text-black" 
                            : "text-white hover:bg-white hover:text-black"
                    } active:bg-slate-100/50 active:text-black focus:text-white focus:bg-slate-100`}>
                        <a href={item.href}>{item.label}</a>
                    </li>
                ))}
            </ul>
            <div className="flex flex-col bg-zinc-900 hover:bg-white transition-all mr-2 h-[90%] w-auto px-2 py-1 group-hover rounded-lg tracking-tight justify-center items-center">
                <a href="https://drive.google.com/file/d/1FN19ClpiZgEp0X729lsrLv9X6Ih1Ry-s/view?usp=drive_link">
                    <PiFilePdfFill className="text-white hover:text-black text-3xl"/>
                </a>
            </div>
        </div>
    );
}