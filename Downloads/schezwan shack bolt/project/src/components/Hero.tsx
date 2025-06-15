import React from 'react';
import { ChefHat, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-red-900/40 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Schezwan noodles"
          className="w-full h-full object-cover scale-110 animate-pulse"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <ChefHat className="w-16 h-16 text-[#E23E3E] mr-4 animate-bounce" />
          <h1 className="text-5xl md:text-7xl font-bold text-white font-['Space_Grotesk'] tracking-tight">
            SCHEZWAN
            <span className="block text-[#E23E3E] text-shadow-glow">SHACK</span>
          </h1>
        </div>
        
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 font-['Space_Grotesk']">
          India's Boldest Bites. <br />
          <span className="text-[#40C4FF]">Straight Outta the Wok.</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
          Fast. Fiery. Freakin' Addictive.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group bg-[#E23E3E] hover:bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 flex items-center">
            Order Now on Zomato
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="group bg-transparent border-2 border-[#40C4FF] text-[#40C4FF] hover:bg-[#40C4FF] hover:text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center">
            Explore Menu
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-[#E23E3E] rounded-full animate-ping"></div>
      <div className="absolute bottom-32 right-20 w-6 h-6 bg-[#40C4FF] rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-10 w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
    </section>
  );
};

export default Hero;