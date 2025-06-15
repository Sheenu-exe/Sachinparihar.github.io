import {  Phone, Clock, Navigation } from 'lucide-react';
import { IoMdPin } from "react-icons/io";
import { MdDeliveryDining } from "react-icons/md";
import { FaParking, FaSchool } from "react-icons/fa";

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
                <IoMdPin className="w-6 h-6 text-[#E23E3E] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Our Location</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Shop No 2 Poorva Residence<br />
                    Near Challenger School, Shiv Sai Ln<br />
                    Pimple Saudagar, Pune<br />
                    Pimpri-Chinchwad, Maharashtra 411027
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 mb-6">
                <Phone className="w-6 h-6 text-[#40C4FF] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Get in Touch</h3>
                  <p className="text-gray-300">
                    <a href="tel:+917972303126" className="hover:text-[#40C4FF] transition-colors">
                      +91 79723 03126
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
                    <p>Monday - Sunday: 2:00 PM - 11:30 PM</p>
                    <p className="text-sm text-[#40C4FF]">Open every day!</p>
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
                Located near Challenger School on Shiv Sai Lane. Look for the glowing red sign - you can't miss us!
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="bg-white/20 flex justify-center items-center gap-x-1 hover:bg-white/30 px-4 py-2 rounded-full text-md transition-colors">
                  <span className='text-2xl'><FaSchool/></span> Near Challenger School
                </button>
                <button className="bg-white/20 flex justify-center items-center gap-x-2 hover:bg-white/30 px-4 py-2 rounded-full text-md transition-colors">
                <span className='text-2xl'><FaParking/></span> Parking available
                </button>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative">
            <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 aspect-[4/3]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3343.2295482721997!2d73.7979096!3d18.599101099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b90727cc6b23%3A0xe9c1487c2520b33!2sSchezwan%20Shack%20Chinese%20restaurant!5e1!3m2!1sen!2sin!4v1749981578903!5m2!1sen!2sin"
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
            <div className="absolute flex justify-center items-center -top-3 -right-3 bg-[#E23E3E] text-white px-4 py-2 rounded-full text-sm font-semibold animate-bounce">
              <span className='text-3xl'><IoMdPin/></span> We're Here!
            </div>
            <div className="absolute -bottom-3 gap-x-1 flex justify-center items-center -left-3 bg-[#40C4FF] text-black px-4 py-2 rounded-full text-sm font-semibold">
              <span className='text-3xl'><MdDeliveryDining/></span> Fast Delivery Zone
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindTheShack;