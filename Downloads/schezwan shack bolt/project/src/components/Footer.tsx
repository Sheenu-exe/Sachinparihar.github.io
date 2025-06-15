import React from 'react';
import { ChefHat, Instagram, MapPin, Phone, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <ChefHat className="w-8 h-8 text-[#E23E3E]" />
              <h3 className="text-2xl font-bold text-white font-['Space_Grotesk']">
                SCHEZWAN<span className="text-[#E23E3E]">SHACK</span>
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              India's boldest bites, straight outta the wok. Serving authentic Indo-Chinese flavors that'll make your taste buds dance.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/schezwanshack"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-[#E23E3E] p-3 rounded-full transition-colors"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://zomato.com/schezwanshack"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-[#E23E3E] p-3 rounded-full transition-colors"
              >
                <span className="text-white font-bold text-sm">Z</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-[#40C4FF] transition-colors">Home</a></li>
              <li><a href="#menu" className="text-gray-400 hover:text-[#40C4FF] transition-colors">Menu</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-[#40C4FF] transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-[#40C4FF] transition-colors">Contact</a></li>
              <li><a href="#offers" className="text-gray-400 hover:text-[#40C4FF] transition-colors">Offers</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#E23E3E] mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Phoenix Mall, Lower Parel<br />Mumbai - 400013
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#40C4FF]" />
                <span className="text-gray-400 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-400 text-sm">hello@schezwanshack.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-white font-semibold mb-4">Opening Hours</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400 text-sm">Mon - Sun</span>
                <span className="text-white text-sm">11 AM - 2 AM</span>
              </div>
              <div className="bg-green-500/20 border border-green-500 rounded-lg px-3 py-2 mt-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm font-semibold">Open Now</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2024 Schezwan Shack. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>Built with love by</span>
            <span className="text-[#40C4FF] font-semibold">Cresta Studio</span>
            <Heart className="w-4 h-4 text-[#E23E3E] fill-current animate-pulse" />
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-2 h-2 bg-[#E23E3E] rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-[#40C4FF] rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-bounce"></div>
      </div>
    </footer>
  );
};

export default Footer;