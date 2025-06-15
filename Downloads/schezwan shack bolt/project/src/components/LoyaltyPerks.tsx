import React from 'react';
import { Gift, Zap, Truck, Trophy } from 'lucide-react';

const LoyaltyPerks = () => {
  const perks = [
    {
      icon: Gift,
      title: "Free Dish Bonanza",
      description: "Get 1 FREE dish on every 5 orders",
      highlight: "🔥 Most Popular",
      color: "text-[#E23E3E]",
      bgColor: "bg-[#E23E3E]/20",
      borderColor: "border-[#E23E3E]"
    },
    {
      icon: Zap,
      title: "Lightning Delivery",
      description: "Priority delivery in under 15 minutes",
      highlight: "⚡ Super Fast",
      color: "text-[#40C4FF]",
      bgColor: "bg-[#40C4FF]/20",
      borderColor: "border-[#40C4FF]"
    },
    {
      icon: Truck,
      title: "Zero Delivery Fee",
      description: "Free delivery on orders above ₹199",
      highlight: "💸 Save Big",
      color: "text-green-400",
      bgColor: "bg-green-400/20",
      borderColor: "border-green-400"
    },
    {
      icon: Trophy,
      title: "VIP Status",
      description: "Exclusive access to new menu items",
      highlight: "👑 Elite Member",
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/20",
      borderColor: "border-yellow-400"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-['Space_Grotesk']">
            Loyalty <span className="text-[#E23E3E]">Perks</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Because loyal customers deserve the royal treatment. Join the Shack Squad and unlock epic rewards!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {perks.map((perk, index) => (
            <div
              key={index}
              className={`group relative ${perk.bgColor} ${perk.borderColor} border-2 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl`}
            >
              <div className="absolute -top-3 -right-3 bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-semibold border border-gray-600">
                {perk.highlight}
              </div>
              
              <perk.icon className={`w-12 h-12 ${perk.color} mb-4 group-hover:scale-110 transition-transform`} />
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#40C4FF] transition-colors">
                {perk.title}
              </h3>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                {perk.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#E23E3E] to-red-600 rounded-2xl p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-['Space_Grotesk']">
              Ready to Join the Squad?
            </h3>
            <p className="text-xl text-white/90 mb-6">
              Start earning rewards with your very first order!
            </p>
            <button className="bg-white text-[#E23E3E] px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors transform hover:scale-105 hover:shadow-xl">
              Sign Up Now & Get ₹50 Off
            </button>
          </div>
          <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default LoyaltyPerks;