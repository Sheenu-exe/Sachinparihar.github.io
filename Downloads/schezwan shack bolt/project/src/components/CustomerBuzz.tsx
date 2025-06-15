import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    text: "The Chilli Paneer here is INSANE! 🔥 Can't get enough of that schezwan kick. Best Indo-Chinese in the city hands down!",
    location: "Mumbai",
    verified: true
  },
  {
    id: 2,
    name: "Arjun Patel",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    text: "Late night cravings sorted! Their Dragon Rice at 2 AM hits different. Fast delivery and flavors that slap! 💥",
    location: "Pune",
    verified: true
  },
  {
    id: 3,
    name: "Sneha Gupta",
    avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    text: "Momos game is STRONG! Perfect spice level and that schezwan sauce is addictive. Already ordered 3 times this week! 🥟",
    location: "Delhi",
    verified: true
  },
  {
    id: 4,
    name: "Vikash Kumar",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    text: "Found my new obsession! The Hakka noodles are chef's kiss 👨‍🍳💋 Perfect balance of spice and flavor. Highly recommended!",
    location: "Bangalore",
    verified: true
  },
  {
    id: 5,
    name: "Ananya Singh",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    text: "Finally, authentic street-style Chinese food! The open kitchen concept gives me confidence. Fresh, hot, and absolutely delicious! 🌟",
    location: "Hyderabad",
    verified: true
  },
  {
    id: 6,
    name: "Rohit Mehta",
    avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    text: "Spice level: DANGEROUS! 🌶️ But that's exactly what I wanted. The loyalty program is awesome too. Free food FTW!",
    location: "Chennai",
    verified: true
  }
];

const CustomerBuzz = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-['Space_Grotesk']">
            Spice That <span className="text-[#E23E3E]">Slaps!</span> 💥
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it - hear from the spice squad!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-[#E23E3E] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                index % 2 === 0 ? 'hover:shadow-red-500/10' : 'hover:shadow-cyan-500/10'
              }`}
            >
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-[#E23E3E]/30" />
                
                <div className="flex items-center mb-4">
                  <div className="relative">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#40C4FF] group-hover:border-[#E23E3E] transition-colors"
                    />
                    {testimonial.verified && (
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-gray-900 flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="ml-3 flex-1">
                    <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                    <p className="text-gray-400 text-xs">{testimonial.location}</p>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-gray-500">Verified Order</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-[#40C4FF]">Helpful?</span>
                    <button className="text-xs text-gray-400 hover:text-white transition-colors">👍</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Join thousands of happy customers!</p>
          <div className="flex items-center justify-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#E23E3E]">4.8★</div>
              <div className="text-sm text-gray-400">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#40C4FF]">10K+</div>
              <div className="text-sm text-gray-400">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">50K+</div>
              <div className="text-sm text-gray-400">Orders Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerBuzz;