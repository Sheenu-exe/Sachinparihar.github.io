import React from 'react';

import { FaLightbulb, FaHandshake, FaRocket, FaTrophy } from 'react-icons/fa';
import AboutUsAnimation from '../components/aboutUs.json';

interface ValueProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Value: React.FC<ValueProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md animate-fadeIn">
    <div className="flex items-center mb-4">
      <div className="text-3xl text-accent mr-4">{icon}</div>
      <h4 className="text-xl font-semibold text-accent">{title}</h4>
    </div>
    <p className="text-gray-800">{description}</p>
  </div>
);

const AboutUs: React.FC = () => {
  return (
    <section id="aboutUs" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center my-16 text-accent animate-fadeInUp">
          About EVIRSA
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
          {/* Company Description */}
          <div className="md:col-span-4 bg-white p-8  rounded-lg shadow-lg animate-fadeInUp">
            <h3 className="text-2xl font-bold mb-4 text-accent">Our Story</h3>
            <p className="text-gray-800 mb-4">
              EVIRSA is a dynamic web development and digital marketing company based in Pune, India. Founded by Sachin Parihar and Shreyas Jagtap, we've been transforming businesses through cutting-edge digital solutions since our inception.
            </p>
            <p className="text-gray-800">
              Our team of skilled developers, creative designers, and marketing strategists work in synergy to deliver comprehensive digital experiences that drive growth and success for our clients.
            </p>
          </div>

          {/* Animation */}
            {/* Co-founder: Shreyas Jagtap */}
          <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-lg animate-fadeInUp">
            <div className="flex flex-col md:flex-row items-center">
              
              <div>
                <h4 className="text-2xl font-semibold mb-2 text-accent">Shreyas Jagtap</h4>
                <p className="text-gray-800 mb-2">Co-founder & Tech Architect</p>
                <p className="text-gray-800">
                  Shreyas oversees the technical architecture at EVIRSA, leveraging his expertise in cloud computing and backend technologies to build robust, scalable solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Co-founder: Sachin Parihar */}
          <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-lg animate-fadeInUp">
            <div className="flex flex-col md:flex-row items-center">
              
              <div>
                <h4 className="text-2xl font-semibold mb-2 text-accent">Sachin Parihar</h4>
                <p className="text-gray-800 mb-2">Full-Stack developer and UI UX Expert</p>
                <p className="text-gray-800">
                  Sachin leads the web development & UI UX at EVIRSA, bringing expertise in React, Next.js, and modern web technologies to create cutting-edge user experiences.
                </p>
              </div>
            </div>
          </div>

        

          {/* Core Values */}
          <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-lg animate-fadeInUp">
            <h3 className="text-2xl font-bold mb-6 text-accent">Our Core Values</h3>
            <div className="space-y-4">
              <Value 
                icon={<FaLightbulb />}
                title="Innovation"
                description="Pushing boundaries with cutting-edge solutions."
              />
              <Value 
                icon={<FaHandshake />}
                title="Partnership"
                description="Building strong, lasting client relationships."
              />
            </div>
          </div>

          {/* More Core Values */}
          <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-lg animate-fadeInUp">
            <h3 className="text-2xl font-bold mb-6 text-accent">Our Commitment</h3>
            <div className="space-y-4">
              <Value 
                icon={<FaRocket />}
                title="Excellence"
                description="Striving for the highest quality in all we do."
              />
              <Value 
                icon={<FaTrophy />}
                title="Results-Driven"
                description="Focused on delivering measurable success."
              />
            </div>
          </div>

          {/* Achievements */}
          <div className="md:col-span-4 bg-white p-8 rounded-lg shadow-lg animate-fadeInUp">
            <h3 className="text-2xl font-bold mb-6 text-accent">Our Achievements</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              <li>Successfully completed over 100 web development projects across various industries.</li>
              <li>Achieved an average of 40% increase in organic traffic for our clients through our SEO strategies.</li>
              <li>Developed innovative AI-powered chatbots, including 'Gita AI' and 'Blaze AI'.</li>
              <li>Recognized as a top emerging web development company in Pune in 2023.</li>
              <li>Maintained a 98% client satisfaction rate with numerous repeat customers and referrals.</li>
            </ul>
          </div>
        </div>

        <div className="text-center animate-fadeInUp">
          <a 
            href="#contact" 
            className="bg-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-colors duration-300 inline-block"
          >
            Work With Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;