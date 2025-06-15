import React from 'react';
import { Users, Clock, MapPin } from 'lucide-react';

const ShackVibe = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#E23E3E] to-[#40C4FF] rounded-2xl blur-xl opacity-20 animate-pulse"></div>
            <img
              src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Schezwan Shack Kitchen"
              className="relative w-full h-[500px] object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-black/80 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-[#40C4FF]" />
                    <span className="text-sm">Live Kitchen</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm">Open Now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-['Space_Grotesk']">
              The <span className="text-[#E23E3E]">Shack</span> Vibe
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Born from Mumbai's late-night food culture, Schezwan Shack is where 
              <span className="text-[#40C4FF] font-semibold"> urban hunger meets authentic flavors</span>. 
              Our open kitchen philosophy means you see every flame, every wok toss, 
              every burst of aromatic spice that goes into your order.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-[#E23E3E] transition-colors">
                <Clock className="w-8 h-8 text-[#40C4FF] mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Lightning Fast</h3>
                <p className="text-gray-400 text-sm">Average order ready in 12 minutes. Because hunger can't wait.</p>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-[#E23E3E] transition-colors">
                <MapPin className="w-8 h-8 text-[#40C4FF] mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Street Smart</h3>
                <p className="text-gray-400 text-sm">Authentic street flavors elevated to gourmet standards.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="bg-[#E23E3E]/20 border border-[#E23E3E] rounded-full px-4 py-2">
                <span className="text-[#E23E3E] font-semibold">#AuthenticFlavors</span>
              </div>
              <div className="bg-[#40C4FF]/20 border border-[#40C4FF] rounded-full px-4 py-2">
                <span className="text-[#40C4FF] font-semibold">#OpenKitchen</span>
              </div>
              <div className="bg-yellow-400/20 border border-yellow-400 rounded-full px-4 py-2">
                <span className="text-yellow-400 font-semibold">#LateNightCravings</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShackVibe;