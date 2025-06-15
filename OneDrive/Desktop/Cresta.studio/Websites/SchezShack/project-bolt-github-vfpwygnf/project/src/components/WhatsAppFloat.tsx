import { useState, useEffect } from 'react';
import {  X } from 'lucide-react';
import { BsWhatsapp } from 'react-icons/bs';
const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const whatsappNumber = "+917972303126";
  const message = "Hey Schezwan Shack! I want to place an order. Can you help me with the menu and delivery details? 🔥";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-[100]">
        <div className="relative">
          {/* Main Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transform hover:scale-110 transition-all duration-300 hover:shadow-green-500/25 cursor-pointer"
            aria-label="Open WhatsApp chat"
          >
            <BsWhatsapp className="w-6 h-6" />
          </button>

          {/* Subtle Glow Effect */}
          <div className="absolute inset-0 bg-green-500 rounded-full opacity-20 pointer-events-none"></div>
        </div>
      </div>

      {/* Expanded Chat Preview */}
      {isExpanded && (
        <div className="fixed bottom-24 right-6 z-[100] bg-white rounded-2xl shadow-2xl border border-gray-200 w-80 max-w-[90vw] animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-green-500 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <BsWhatsapp className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Schezwan Shack</h3>
                <p className="text-xs opacity-90">Typically replies instantly</p>
              </div>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-white/80 hover:text-white cursor-pointer"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-4 space-y-3">
            <div className="bg-gray-100 rounded-2xl p-3 max-w-[80%]">
              <p className="text-sm text-gray-800">
                Hey there! 👋 Ready to order some spicy goodness?
              </p>
            </div>
            
            <div className="bg-gray-100 rounded-2xl p-3 max-w-[80%]">
              <p className="text-sm text-gray-800">
                <span className="font-semibold text-[#E23E3E]">📍 Location:</span> Shop No:2, Poorva Residency Near Challenger's Public School, Shiv Sai Lane, Pimple Saudagar, Pune, Maharashtra 411027
              </p>
            </div>

           
          </div>
          
          <div className="p-4 border-t border-gray-100">
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2 cursor-pointer"
              aria-label="Order via WhatsApp"
            >
              <BsWhatsapp className="w-4 h-4" />
              <span>Order via WhatsApp</span>
            </button>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black/20 z-[99]"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </>
  );
};

export default WhatsAppFloat;