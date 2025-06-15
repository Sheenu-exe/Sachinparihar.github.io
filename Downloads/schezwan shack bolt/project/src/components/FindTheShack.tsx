import React from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const FindTheShack = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-['Space_Grotesk']">
            Find The <span className="text-[#E23E3E]">Shack</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Come for the vibe, stay for the spice. We're easier to find than your next favorite dish!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <div className="flex items-start space-x-4 mb-6">
                <MapPin className="w-6 h-6 text-[#E23E3E] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Our Location</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Shop No. 12, Ground Floor,<br />
                    Phoenix Mall, Lower Parel,<br />
                    Mumbai - 400013, Maharashtra
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 mb-6">
                <Phone className="w-6 h-6 text-[#40C4FF] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Get in Touch</h3>
                  <p className="text-gray-300">
                    <a href="tel:+919876543210" className="hover:text-[#40C4FF] transition-colors">
                      +91 98765 43210
                    </a>
                  </p>
                  <p className="text-gray-300">
                    <a href="mailto:hello@schezwanshack.com" className="hover:text-[#40C4FF] transition-colors">
                      hello@schezwanshack.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Opening Hours</h3>
                  <div className="space-y-1 text-gray-300">
                    <p>Monday - Sunday: 11:00 AM - 2:00 AM</p>
                    <p className="text-sm text-[#40C4FF]">Late night delivery available!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#E23E3E] to-red-600 rounded-2xl p-6 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Navigation className="w-6 h-6" />
                <h3 className="text-xl font-semibold">Quick Directions</h3>
              </div>
              <p className="mb-4">
                Right next to the Phoenix Mall main entrance. Look for the glowing red sign - you can't miss us!
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full text-sm transition-colors">
                  🚇 Lower Parel Station - 5 min walk
                </button>
                <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full text-sm transition-colors">
                  🅿️ Free parking available
                </button>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative">
            <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 aspect-[4/3]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8893788394894!2d72.8311188!3d19.0069444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cef88f3b3c77%3A0x8e1c5b4c4b4c4b4c!2sPhoenix%20Mills%2C%20Lower%20Parel%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Schezwan Shack Location"
                className="grayscale hover:grayscale-0 transition-all duration-300"
              ></iframe>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-3 -right-3 bg-[#E23E3E] text-white px-4 py-2 rounded-full text-sm font-semibold animate-bounce">
              📍 We're Here!
            </div>
            <div className="absolute -bottom-3 -left-3 bg-[#40C4FF] text-black px-4 py-2 rounded-full text-sm font-semibold">
              🛵 Fast Delivery Zone
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindTheShack;