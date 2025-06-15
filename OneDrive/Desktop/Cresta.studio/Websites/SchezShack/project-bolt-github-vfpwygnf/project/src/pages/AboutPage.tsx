
import { Users, Award, Clock, Heart, Flame } from 'lucide-react';
import { FaHome, FaStar } from "react-icons/fa";
import Logo from '../assets/imgs/logo.png'
import { MdDeliveryDining } from "react-icons/md";

const AboutPage = () => {
  const stats = [
    { icon: Users, value: '5K+', label: 'Happy Customers', color: 'text-[#40C4FF]' },
    { icon: Award, value: '4.8★', label: 'Customer Rating', color: 'text-yellow-400' },
    { icon: Clock, value: '15', label: 'Avg Prep Time (min)', color: 'text-green-400' },
    { icon: Heart, value: '120+', label: 'Menu Items', color: 'text-[#E23E3E]' },
  ];


  const values = [
    {
      icon: Flame,
      title: "Authentic Flavors",
      description: "We stay true to traditional Indo-Chinese recipes while adding our own innovative twist.",
      color: "text-[#E23E3E]"
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Every decision we make is centered around delivering the best experience to our customers.",
      color: "text-[#40C4FF]"
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "From sourcing ingredients to final preparation, we maintain the highest quality standards.",
      color: "text-yellow-400"
    },
    {
      icon: Heart,
      title: "Community Love",
      description: "We're not just a restaurant; we're part of the community, serving with passion and care.",
      color: "text-green-400"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-['Space_Grotesk']">
                Our <span className="text-[#E23E3E]">Story</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Born from a passion for authentic Indo-Chinese flavors and Pune's vibrant food culture, 
                Schezwan Shack has been serving bold, fiery dishes in Pimple Saudagar since our inception.
              </p>
              <div className="flex items-center space-x-4">
                <img src={Logo} className="w-16 h-16 text-[#E23E3E]" />
                <div>
                  <p className="text-lg font-semibold text-white">Established in Pune</p>
                  <p className="text-gray-400">Pimple Saudagar's Favorite Indo-Chinese Destination</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#E23E3E] to-[#40C4FF] rounded-2xl blur-xl opacity-20 animate-pulse"></div>
              <img
                src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Schezwan Shack Kitchen"
                className="relative w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-[#E23E3E] transition-all duration-300 transform hover:scale-105">
                  <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4 group-hover:scale-110 transition-transform`} />
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-['Space_Grotesk']">
              Our <span className="text-[#40C4FF]">Mission</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              To bring authentic Indo-Chinese flavors to every corner of Pune, one spicy bite at a time. 
              We believe food is more than sustenance—it's an experience that brings people together, 
              creates memories, and satisfies the soul.
            </p>
            
            <div className="bg-gradient-to-r from-[#E23E3E] to-red-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">"Food is our language of love"</h3>
              <p className="text-lg opacity-90">
                Every dish we serve carries the warmth of our kitchen, the passion of our chefs, 
                and the promise of an unforgettable culinary journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-['Space_Grotesk']">
              Our <span className="text-[#E23E3E]">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do, from sourcing ingredients to serving customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-[#E23E3E] transition-all duration-300 transform hover:scale-105"
              >
                <value.icon className={`w-12 h-12 ${value.color} mb-4 group-hover:scale-110 transition-transform`} />
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#40C4FF] transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* Location Highlight */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-['Space_Grotesk']">
              Proudly Serving <span className="text-[#E23E3E]">Pimple Saudagar</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Located in the heart of Pimple Saudagar, we're proud to be part of this vibrant community. 
              Our restaurant serves not just food, but creates connections and memories for families, 
              friends, and food lovers across Pune.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                <div className="text-3xl w-full flex justify-center items-center mb-4"><FaHome/></div>
                <h3 className="text-lg font-bold text-white mb-2">Local Favorite</h3>
                <p className="text-gray-400 text-sm">Serving the Pimple Saudagar community with authentic flavors</p>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <div className="text-3xl w-full flex justify-center items-center mb-4"><MdDeliveryDining/></div>
                <h3 className="text-lg font-bold text-white mb-2">Fast Delivery</h3>
                <p className="text-gray-400 text-sm">Quick delivery across Pimple Saudagar and nearby areas</p>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <div className="text-3xl w-full flex justify-center items-center mb-4"><FaStar/></div>
                <h3 className="text-lg font-bold text-white mb-2">4.8 Rating</h3>
                <p className="text-gray-400 text-sm">Consistently rated high by our valued customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;