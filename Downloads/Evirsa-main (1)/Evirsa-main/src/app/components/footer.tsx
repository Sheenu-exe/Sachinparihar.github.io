import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import whiteLogo from "./evirsa-logo-white.png"
import '../globals.css'
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Image className='w-auto h-[12vh]' src={whiteLogo} alt='logo'/>
            <p className="mb-4">Elevating your digital presence with expert web development and marketing solutions.</p>
            <p>Pune, Maharashtra, India</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
            <Link href="/" className="hover:text-accent transition-colors"><li>Home</li></Link>
            <Link href="/aboutus" className="hover:text-accent transition-colors"><li>About Us</li></Link>
            <Link href="/" className="hover:text-accent transition-colors"><li>Services</li></Link>
            <Link href="/contact" className="hover:text-accent transition-colors"><li>Contact us</li></Link>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>Web Development</li>
              <li>Digital Marketing</li>
              <li>SEO Optimization</li>
              <li>App Development</li>
              <li>Google Ads / PPC</li>
              <li>SMO Marketing</li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Get in Touch</h4>
            <p className="mb-2">Email: info@evirsa.com</p>
            <p className="mb-4">Phone: +91 7058004255</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} EVIRSA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;