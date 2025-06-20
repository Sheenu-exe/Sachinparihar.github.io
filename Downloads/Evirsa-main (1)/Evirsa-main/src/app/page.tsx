"use client"
import React, { useEffect } from "react";
import Typed from "typed.js";
import Animation from "./components/laptop.json";
import Lottie from "lottie-react";
import Coding from "./components/coding.json"
import Marketng from "./components/marketing.json"
import seo from "./components/seo.json"
import appdev from "./components/appdev.json"
import gglads from "./components/gglads.json"
import smo from "./components/smo.json"
import AboutUs from "./components/aboutUs.json"
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";


interface EvirsaProps {}

const Home: React.FC<EvirsaProps> = () => {

 
  useEffect(() => {
    const typed = new Typed("#typed-text", {
      strings: ["Digital Presence", "Website Visibility", "Marketing Strategy"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });
  
    return () => {
      typed.destroy();
    };
  }, []);

  // Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

  return (
    <>
      <div className=" text-gray-800 font-['Poppins'] bg-[https://as2.ftcdn.net/v2/jpg/02/98/21/71/1000_F_298217175_oEfbikdbPeyEPWtTHoBiGFh5C3COKv4y.jpg]">
        <main 
          id="home" 
          className="min-h-screen flex items-center pt-16"
        >
          <div className="container mx-auto px-6">
            <div className="flex flex-col-reverse md:flex-row items-center">
              <div className="sm:w-[50%] w-full sm:h-screen h-[60vh] flex flex-col justify-center items-left gap-y-3">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
                  Elevate Your{" "}
                  <span id="typed-text" className="text-accent"></span> with
                  EVIRSA
                </h2>
                <p className="text-lg text-gray-800 mb-8">
                  Expert web development and strategic digital marketing to help
                  your business thrive in the online world.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <a
                    href="#expertise"
                    className="bg-primary text-gray-100 px-6 py-3 rounded-md font-semibold border-secondary border hover:bg-accent transition-colors m-0 duration-300 text-center">
                    Our Services
                  </a>
                  <a
                    href="/contact"
                    className="bg-primary text-gray-100 px-6 py-3 rounded-md font-semibold border-secondary border  hover:bg-accent transition-colors m-0 duration-300 text-center">
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="sm:w-[50%] w-full sm:h-screen h-[40vh] flex justify-center items-center">
                <div id="lottie-animation">
                  <Lottie animationData={Animation} />
                </div>
              </div>
            </div>
          </div>
        </main>

        <section 
          id="aboutUs" 
          className="min-h-fit pt-10 flex items-center justify-center">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-bold text-center mb-14 text-accent">
              About EVIRSA
            </h3>
            <div className="flex flex-col h-fit sm:h-[70vh] md:flex-row items-center ">
              <div className="md:w-1/2">
                <p className="text-gray-800 mb-4">
                  EVIRSA is a dynamic web development and digital marketing company based in the vibrant city of Pune, India. Founded with a passion for innovation and a commitment to excellence, we've been transforming businesses through cutting-edge digital solutions since our inception.
                </p>
                <p className="text-gray-800 mb-4">
                  Our team of skilled developers, creative designers, and marketing strategists work in synergy to deliver comprehensive digital experiences that drive growth and success for our clients. We pride ourselves on staying ahead of the curve in the ever-evolving digital landscape, ensuring that our clients always benefit from the latest technologies and trends.
                </p>
                <p className="text-gray-800">
                  At EVIRSA, we believe in forging strong partnerships with our clients, understanding their unique needs, and crafting tailored solutions that align with their business objectives. Whether you're a startup looking to make your mark or an established enterprise aiming to enhance your digital presence, we're here to elevate your brand in the online world.
                </p>
              </div>
              <div className="md:w-1/2 flex  h-fit justify-center items-center">
                <Lottie animationData={AboutUs} className="h-[60%]" />
              </div>
            </div>
          </div>
        </section>

        <section 
          id='whyUs' 
          className="sm:h-screen mt-14 h-fit w-full flex items-center">
          <div className="container mx-auto pb-10 px-6">
            <h3 className="text-3xl font-bold text-center text-accent mb-12">
              Why Choose Us?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-zinc-200/50 p-6 rounded-lg shadow-md why-us-thing">
                <h4 className="text-xl font-semibold text-accent mb-4">
                  Expert Team
                </h4>
                <p className="text-gray-800">
                  Our team of experts is dedicated to delivering the best
                  solutions for your business.
                </p>
              </div>
              <div className="bg-zinc-200/50 p-6 rounded-lg shadow-md why-us-thing">
                <h4 className="text-xl font-semibold text-accent mb-4">
                  Custom Solutions
                </h4>
                <p className="text-gray-800">
                  We provide custom solutions tailored to your business needs.
                </p>
              </div>
              <div className="bg-zinc-200/50 p-6 rounded-lg shadow-md why-us-thing">
                <h4 className="text-xl font-semibold text-accent mb-4">
                  Affordable Pricing
                </h4>
                <p className="text-gray-800">
                  Our services are affordable without compromising on quality.
                </p>
              </div>
              <div className="bg-zinc-200/50 p-6 rounded-lg shadow-md why-us-thing">
                <h4 className="text-xl font-semibold text-accent mb-4">
                  Innovative Approach
                </h4>
                <p className="text-gray-800">
                  We embrace cutting-edge technologies and creative strategies to keep your business ahead of the competition.
                </p>
              </div>
              <div className="bg-zinc-200/50 p-6 rounded-lg shadow-md why-us-thing">
                <h4 className="text-xl font-semibold text-accent mb-4">
                  Results-Driven
                </h4>
                <p className="text-gray-800">
                  Our focus is on delivering measurable results that contribute to your business growth and success.
                </p>
              </div>
              <div className="bg-zinc-200/50 p-6 rounded-lg shadow-md why-us-thing">
                <h4 className="text-xl font-semibold text-accent mb-4">
                  Continuous Support
                </h4>
                <p className="text-gray-800">
                  We provide ongoing support and maintenance to ensure your digital assets perform optimally at all times.
                </p>
              </div>
            </div>
          </div>
        </section>
       
        <section 
          id="expertise" 
          className="min-h-screen flex items-center">
          <div className="container mx-auto pb-10 px-6">
            <h3 className="text-3xl font-bold text-center text-accent mb-12">
              Our Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-zinc-200/50 p-6 h-[50vh] rounded-lg shadow-md expertise-thing">
                <h4 className="text-xl font-semibold text-accent mb-4">
                  Web Development
                </h4>
                <p className="text-gray-800">
                  Crafting responsive and user-friendly websites tailored to your
                  brand.
                </p>
                <Lottie animationData={Coding} className="h-[60%]" />
              </div>
              <div className="bg-zinc-200/50 p-6 h-[50vh] rounded-lg shadow-md expertise-thing">
                <h4 className="text-xl font-semibold text-accent mb-4">
                  Digital Marketing
                </h4>
                <p className="text-gray-800">
                  Boost your online presence with our strategic marketing
                  solutions.
                </p>
                <Lottie animationData={Marketng} className="h-[60%]" />
              </div>
              <div className="bg-zinc-200/50 p-6 h-[50vh] rounded-lg shadow-md expertise-thing">
                <h4 className="text-xl font-semibold text-accent mb-4">
                  SEO Optimization
                </h4>
                <p className="text-gray-800">
                  Improve your search engine rankings and drive organic traffic.
                </p>
                <Lottie animationData={seo} className="h-[60%]" />
              </div>
              <div className="bg-zinc-200/50 p-6 h-[50vh] rounded-lg shadow-md expertise-thing">
                <h4 className="text-xl font-semibold text-accent mb-4">
                  App Development
                </h4>
                <p className="text-gray-800">
                Developing innovative mobile applications is our forte.
                </p>
                <Lottie animationData={appdev} className="h-[60%]" />
              </div>
              <div className="bg-zinc-200/50 p-6 h-[50vh] rounded-lg shadow-md expertise-thing">
                <h4 className="text-xl font-semibold text-accent mb-4">
                Google Ads / PPC
                </h4>
                <p className="text-gray-800">
                Maximize your ROI with our Google Ads and PPC campaigns.
                </p>
                <Lottie animationData={gglads} className="h-[60%]" />
              </div>
              <div className="bg-zinc-200/50 p-6 h-[50vh] rounded-lg shadow-md expertise-thing">
                <h4 className="text-xl font-semibold text-accent mb-4">
                SMO Marketing
                </h4>
                <p className="text-gray-800">
                Enhance your social media presence with our SMO strategies.
                </p>
                <Lottie animationData={smo} className="h-[60%]" />
              </div>
            </div>
          </div>
        </section>
        <section 
          id='cta' 
          className="h-[90vh] sm:bg-center bg-top w-full flex items-center justify-center gap-10 flex-col  text-center ">
            <h1 className=" sm:text-7xl text-5xl mx-2 text-white font-extrabold">Want to create <br/> Something Awesome?</h1>

            <a href="/contact" className="bg-white text-gray-800 px-3 text-lg py-2 rounded flex justify-center items-center gap-1">Lets Talk<IoIosArrowForward /></a>
        </section>
      </div>
    </>
  );
};

export default Home;