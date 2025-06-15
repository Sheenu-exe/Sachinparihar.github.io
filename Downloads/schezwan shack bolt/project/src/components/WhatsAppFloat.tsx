import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const whatsappNumber = "+919876543210";
  const message = "Hey Schezwan Shack! I want to place an order and save on delivery fees! 🔥";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Notification Badge */}
          <div className="absolute -top-2 -left-2 bg-[#E23E3E] text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold animate-pulse">
            ₹
          </div>
          
          {/* Main Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transform hover:scale-110 transition-all duration-300 hover:shadow-green-500/25 animate-bounce"
            style={{ animationDelay: '2s' }}
          >
            <MessageCircle className="w-6 h-6" />
          </button>

          {/* Glow Effect */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
        </div>
      </div>

      {/* Expanded Chat Preview */}
      {isExpanded && (
        <div className="fixed bottom-24 right-6 z-50 bg-white rounded-2xl shadow-2xl border border-gray-200 w-80 max-w-[90vw] animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-green-500 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Schezwan Shack</h3>
                <p className="text-xs opacity-90">Typically replies instantly</p>
              </div>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-white/80 hover:text-white"
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
                <span className="font-semibold text-[#E23E3E]">💸 SAVE BIG:</span> Order direct via WhatsApp and skip delivery fees!
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#E23E3E] to-red-600 rounded-2xl p-3 text-white">
              <p className="text-sm font-semibold mb-2">🔥 Hot Offers:</p>
              <ul className="text-xs space-y-1">
                <li>• Free delivery on orders ₹199+</li>
                <li>• 10% off on first WhatsApp order</li>
                <li>• Fresh prep guarantee</li>
              </ul>
            </div>
          </div>
          
          <div className="p-4 border-t border-gray-100">
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Order Direct & Save ₹</span>
            </button>
          </div>
        </div>
      )}

      {/* Backdrop */}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </>
  );
};

export default WhatsAppFloat;