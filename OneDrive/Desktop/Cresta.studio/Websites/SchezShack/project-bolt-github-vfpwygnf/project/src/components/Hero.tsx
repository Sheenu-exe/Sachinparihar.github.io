import { ArrowRight } from 'lucide-react';
import Logo from '../assets/imgs/logo.png'
import Background from '../assets/imgs/background1.webp'
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/50 z-10"></div>
        <img 
          src={Background}
          alt="Schezwan noodles"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-3xl mx-auto">
        <div className="flex flex-col items-center justify-center ">
          <img src={Logo} alt="Logo" className="w-24 h-24 text-[#E23E3E] mb-3" />
          <p className="text-2xl font-['Space_Grotesk']">Nandu's</p>
          <h1 className="text-5xl md:text-8xl font-bold text-white flex gap-x-3 font-['Space_Grotesk'] tracking-tight mb-2">
            SCHEZWAN<span className="block text-[#E23E3E]">SHACK</span>
          </h1>
        </div>
        
        <h2 className="text-2xl md:text-4xl font-medium text-white mb-2 font-['Space_Grotesk']">
          Pune's Boldest Bites
          <span className="block text-[#40C4FF] mt-1">Straight Outta the Wok</span>
        </h2>
        
        <p className="text-base md:text-xl text-gray-300 mb-4 font-light">
          Fast. Fiery. Freakin' Addictive.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group bg-[#E23E3E] hover:bg-red-600 text-white px-6 py-2.5 rounded-md text-sm font-medium transition-all duration-300 flex items-center">
            Order Now
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="group bg-transparent border border-[#40C4FF] text-[#40C4FF] hover:bg-[#40C4FF] hover:text-black px-6 py-2.5 rounded-md text-sm font-medium transition-all duration-300 flex items-center">
            Explore Menu
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;