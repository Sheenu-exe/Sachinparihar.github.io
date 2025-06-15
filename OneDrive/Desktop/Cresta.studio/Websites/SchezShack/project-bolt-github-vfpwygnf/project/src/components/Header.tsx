import { useState, useEffect } from 'react';
import {  Menu, X, Phone, Clock } from 'lucide-react';
import Logo from '../assets/imgs/logo.png'
interface HeaderProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage = 'home', onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const checkIfOpen = () => {
      const now = new Date();
      const currentHour = now.getHours();
      const currentMinutes = now.getMinutes();
      const currentTime = currentHour + currentMinutes / 60;

      // Restaurant hours: 2 PM (14:00) to 11:30 PM (23:30)
      const isOpenNow = currentTime >= 14 && currentTime < 23.5;
      setIsOpen(isOpenNow);
    };

    checkIfOpen();
    const interval = setInterval(checkIfOpen, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', href: '#' },
    { id: 'menu', label: 'Menu', href: '#menu' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (pageId: string, href: string) => {
    if (onNavigate) {
      onNavigate(pageId);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-md border-b border-gray-800' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleNavClick('home', '#')}
          >
            <img src={Logo} alt='Logo' className="w-10 h-10 text-[#E23E3E] group-hover:scale-110 transition-transform" />
            <h1 className="text-2xl font-bold text-white font-['Space_Grotesk'] group-hover:text-[#40C4FF] transition-colors">
              SCHEZWAN<span className="text-[#E23E3E]">SHACK</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id, item.href)}
                className={`text-lg font-medium transition-all duration-300 hover:text-[#40C4FF] border-0 relative focus:outline-none focus:ring-0 focus:ring-offset-0 ${
                  currentPage === item.id 
                    ? 'text-[#40C4FF]'
                    : 'text-white hover:text-[#40C4FF]'
                }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#40C4FF] rounded-full"></div>
                )}
              </button>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="w-4 h-4 text-[#40C4FF]" />
                <a href='tel:+9186250 19990'>+9186250 19990</a>
              </div>
              <div id='open-or-not' className="flex items-center open-or-not space-x-2 text-gray-300">
                <div className={`flex items-center px-4 py-1.5 rounded-full backdrop-blur-md transition-all duration-300 ${
                  isOpen 
                    ? 'bg-green-500/10 border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.2)]' 
                    : 'bg-red-500/10 border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.2)]'
                } border`}>
                  <Clock className={`w-4 h-4 ${isOpen ? 'text-green-400' : 'text-red-400'}`} />
                  <span className={`ml-2 font-medium tracking-wide ${
                    isOpen 
                      ? 'text-green-400' 
                      : 'text-red-400'
                  }`}>
                    {isOpen ? "Open Now" : "Closed Now"}
                  </span>
                </div>
              </div>
            </div>
            <button className="bg-[#E23E3E] hover:bg-red-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Order Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-[#40C4FF] transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-gray-800">
            <nav className="py-6 px-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id, item.href)}
                  className={`block w-full text-left text-lg font-medium transition-colors focus:outline-none focus:ring-0 focus:ring-offset-0 ${
                    currentPage === item.id 
                      ? 'text-[#40C4FF]' 
                      : 'text-white hover:text-[#40C4FF]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-700">
                <div className="flex items-center space-x-2 text-gray-300 mb-3">
                  <Phone className="w-4 h-4 text-[#40C4FF]" />
                  <span>+91 79723 03126</span>
                </div>
                <button className="w-full bg-[#E23E3E] hover:bg-red-600 text-white py-3 rounded-full font-semibold transition-colors">
                  Order Now
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;