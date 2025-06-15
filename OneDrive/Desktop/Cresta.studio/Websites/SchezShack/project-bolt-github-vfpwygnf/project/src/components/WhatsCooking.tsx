import { Flame, Star, Clock } from 'lucide-react';

const menuItems = [
  {
    id: 1,
    name: "Veg. Manchurian (Gravy)",
    price: "₹180",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    heat: 3,
    description: "Crispy vegetable dumplings in rich, spicy gravy",
    tag: "Bestseller"
  },
  {
    id: 2,
    name: "Chicken Manchurian (Gravy)",
    price: "₹220",
    image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    heat: 4,
    description: "Boneless chicken in fiery schezwan gravy",
    tag: "Spicy AF"
  },
  {
    id: 3,
    name: "Veg. Triple Rice",
    price: "₹220",
    image: "https://images.pexels.com/photos/674570/pexels-photo-674570.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    heat: 3,
    description: "Three-in-one rice with mixed vegetables",
    tag: "Classic"
  },
  {
    id: 4,
    name: "Chicken Szechuan Noodles",
    price: "₹190",
    image: "https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    heat: 4,
    description: "Spicy noodles with chicken and vegetables",
    tag: "Street Fav"
  }
];

const WhatsCooking = () => {
  const renderHeatScale = (level: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Flame
        key={i}
        className={`w-4 h-4 ${
          i < level ? 'text-[#E23E3E] fill-current' : 'text-gray-600'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-['Space_Grotesk']">
            What's <span className="text-[#E23E3E]">Cooking</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Signature dishes that'll make you question everything you thought you knew about flavor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="group bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-[#E23E3E] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-[#E23E3E] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {item.tag}
                </div>
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                  {renderHeatScale(item.heat)}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#40C4FF] transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-2xl font-bold text-[#E23E3E]">{item.price}</span>
                </div>
                
                <p className="text-gray-400 text-sm mb-4">{item.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-300">4.8</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-[#40C4FF]" />
                    <span className="text-sm text-gray-300">12-15 min</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsCooking;