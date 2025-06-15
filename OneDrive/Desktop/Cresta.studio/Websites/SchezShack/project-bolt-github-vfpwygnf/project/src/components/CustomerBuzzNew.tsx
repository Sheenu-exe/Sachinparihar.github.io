import { useState, useRef, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { motion, useAnimation, useMotionValue, useSpring } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Akshay Navratne",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    text: "Chicken Manchurian and chicken masala lollipop and chicken Manchurian noodles best one must try",
    location: "Pimple Saudagar",
    verified: true
  },
  {
    id: 2,
    name: "Vikrant Bhise",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    text: "My Hunt for Good / Authentic Indian Chinese got over with this.  What an amazing Appetizer. Perfect consistency of  Soup, Perfect Flavours of Schezwan Rice and Chutney and Lot of quantity with Reasonable Price.  Must visit place for chinese platter.",
    location: "Pimple Saudagar",
    verified: true
  },
  {
    id: 3,
    name: "Shon Pokharkar",
    avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    text: "One of the best Chinese restaurants in the area. Always crowded on weekends as taste is their supremacy.",
    location: "Pimple saudagar",
    verified: true
  },
  {
    id: 4,
    name: "Yogesh Ahirrao",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 4,
    text: "This is an awesome place for Indian Chinese food. Tried many of the vegetarian or non-vegetarian options but they never disappoint. Regularly visiting this from last year, they have consistently maintained the quality. I would definitely recommend this place.",
    location: "Pimple Saudagar",
    verified: true
  },
  {
    id: 5,
    name: "Saira Mulla",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    rating: 5,
    text: "Authentic India chinese food with good quality and quantity. It's always crowded on weekends. And we can seethe way food quality is maintained. Worth the price. Must try",
    location: "Pimple Saudagar",
    verified: true
  }
];

const CustomerBuzz = () => {
  const [isDragging, setIsDragging] = useState(false);
  const topRowRef = useRef<HTMLDivElement>(null);
  
  // Animation controls for auto-scrolling
  const topControls = useAnimation();
  const bottomControls = useAnimation();
  
  // Motion values for drag
  const topX = useMotionValue(0);
  
  // Spring animation for smooth movement
  const topSpringX = useSpring(topX, { stiffness: 100, damping: 30 });

  // Auto-scroll animation
  const startAutoScroll = async () => {
    if (isDragging) return;
    
    // Top row moves right
    await topControls.start({
      x: [0, -1000],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop"
      }
    });
    
    // Bottom row moves left
    await bottomControls.start({
      x: [0, 1000],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop"
      }
    });
  };

  useEffect(() => {
    startAutoScroll();
  }, []);

  const handleDragStart = () => {
    setIsDragging(true);
    topControls.stop();
    bottomControls.stop();
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    startAutoScroll();
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
    ));
  };

  const ReviewCard = ({ review, index }: { review: typeof testimonials[0], index: number }) => (
    <div
      className={`group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-[#E23E3E] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl h-[280px] flex flex-col ${
        index % 2 === 0 ? 'hover:shadow-red-500/10' : 'hover:shadow-cyan-500/10'
      }`}
    >
      <div className="relative flex-1">
        <Quote className="absolute -top-2 -left-2 w-8 h-8 text-[#E23E3E]/30" />
        
        <div className="flex items-center mb-4">
          <div className="relative">
            <img
              src={review.avatar}
              alt={review.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-[#40C4FF] group-hover:border-[#E23E3E] transition-colors"
            />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-gray-900 flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
          </div>
          
          <div className="ml-3 flex-1">
            <h4 className="text-white font-semibold text-sm">{review.name}</h4>
            <p className="text-gray-400 text-xs">{review.location}</p>
          </div>
          
          <div className="flex items-center space-x-1">
            {renderStars(review.rating)}
          </div>
        </div>
        
        <p className="text-gray-300 text-sm leading-relaxed italic line-clamp-4">
          "{review.text}"
        </p>
      </div>
      
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-gray-500">Verified Customer</span>
        <span className="text-xs text-[#40C4FF]">⭐ {review.rating}/5</span>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-['Space_Grotesk']">
            Spice That <span className="text-[#E23E3E]">Slaps!</span> 💥
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it - hear from the spice squad!
          </p>
        </div>

        {/* Top row */}
        <div className="relative mb-6 overflow-hidden">
          <motion.div 
            ref={topRowRef}
            className="flex cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: -1000, right: 0 }}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            animate={topControls}
            style={{ x: topSpringX }}
          >
            {[...testimonials, ...testimonials].map((review, index) => (
              <div key={`top-${review.id}-${index}`} className="flex-shrink-0 w-[400px] mx-4">
                <ReviewCard review={review} index={index} />
              </div>
            ))}
          </motion.div>
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