import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Star } from 'lucide-react';

const ContactPage = () => {


  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "Shop No 2 Poorva Residence",
        "Near Challenger School, Shiv Sai Ln",
        "Pimple Saudagar, Pune",
        "Pimpri-Chinchwad, Maharashtra 411027"
      ],
      color: "text-[#E23E3E]"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "+91 79723 03126",
        "WhatsApp: +91 79723 03126",
        "For orders & inquiries"
      ],
      color: "text-[#40C4FF]"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "hello@schezwanshack.com",
        "orders@schezwanshack.com",
        "feedback@schezwanshack.com"
      ],
      color: "text-yellow-400"
    },
    {
      icon: Clock,
      title: "Opening Hours",
      details: [
        "Monday - Sunday",
        "2:00 PM - 11:30 PM",
        "Open every day!"
      ],
      color: "text-green-400"
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@schezwanshack",
      url: "https://instagram.com/schezwanshack",
      color: "bg-gradient-to-r from-purple-500 to-pink-500"
    },
    {
      icon: MessageCircle,
      name: "WhatsApp",
      handle: "+91 79723 03126",
      url: "https://wa.me/917972303126",
      color: "bg-green-500"
    }
  ];

  const faqs = [
    {
      question: "Do you offer home delivery?",
      answer: "Yes! We deliver across Pimple Saudagar and nearby areas. Call us for delivery charges and areas covered."
    },
    {
      question: "What are your most popular dishes?",
      answer: "Our bestsellers include Chicken Manchurian, Paneer Chilly, Veg Hakka Noodles, and our special Szechuan preparations."
    },
    {
      question: "Do you cater for events?",
      answer: "Absolutely! We provide catering services for parties, corporate events, and special occasions. Contact us for bulk orders."
    },
    {
      question: "Are your dishes very spicy?",
      answer: "We offer different spice levels. You can customize the heat level when ordering. Our menu has heat indicators to help you choose."
    },
    {
      question: "Do you have weekend specials?",
      answer: "Yes! We have special items available only on weekends like Chicken Satay, Drumsticks, and other premium preparations."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, UPI, cards, and all major digital payment methods for both dine-in and delivery orders."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-['Space_Grotesk']">
            Get In <span className="text-[#E23E3E]">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Have a question, feedback, or just want to say hello? We'd love to hear from you! 
            Reach out to us through any of the channels below.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+917972303126"
              className="bg-[#E23E3E] hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/917972303126"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
               key={index}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-[#E23E3E] transition-all duration-300 transform hover:scale-105"
              >
                <info.icon className={`w-12 h-12 ${info.color} mb-4 group-hover:scale-110 transition-transform`} />
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#40C4FF] transition-colors">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-400 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map */}
            <div className="h-full">
              <div className="relative h-full">
                <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 h-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3343.2295482721997!2d73.7979096!3d18.599101099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b90727cc6b23%3A0xe9c1487c2520b33!2sSchezwan%20Shack%20Chinese%20restaurant!5e1!3m2!1sen!2sin!4v1749981578903!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Schezwan Shack Location"
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  ></iframe>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-3 -right-3 bg-[#E23E3E] text-white px-4 py-2 rounded-full text-sm font-semibold animate-bounce">
                  📍 We're Here!
                </div>
              </div>
            </div>

            {/* Social Links & Why Choose Us */}
            <div className="h-full flex flex-col space-y-6">
              {/* Social Links */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 flex-1">
                <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-4 p-4 ${social.color} rounded-xl text-white hover:scale-105 transition-transform`}
                    >
                      <social.icon className="w-6 h-6" />
                      <div>
                        <div className="font-semibold">{social.name}</div>
                        <div className="text-sm opacity-90">{social.handle}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-r from-[#E23E3E] to-red-600 rounded-2xl p-6 text-white flex-1">
                <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">4.8★</div>
                    <div className="text-sm opacity-90">Customer Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">15min</div>
                    <div className="text-sm opacity-90">Avg Prep Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">120+</div>
                    <div className="text-sm opacity-90">Menu Items</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">Daily</div>
                    <div className="text-sm opacity-90">Open 2PM-11:30PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-['Space_Grotesk']">
              Frequently Asked <span className="text-[#E23E3E]">Questions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Quick answers to common questions about our food, services, and more
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-[#E23E3E] transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-white mb-3 flex items-center">
                  <Star className="w-5 h-5 text-[#40C4FF] mr-2" />
                  {faq.question}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">Still have questions?</p>
            <a
              href="tel:+917972303126"
              className="bg-[#40C4FF] hover:bg-cyan-500 text-black px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Call Us: +91 79723 03126
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;