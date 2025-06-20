'use client'

import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const WorkWithUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to an API)
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="min-h-screen py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold mt-10 text-center mb-16 text-accent animate-fadeInUp">
          Work With Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate-fadeInUp">
            <h3 className="text-3xl font-semibold mb-8 text-accent">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="animate-fadeInUp">
            <h3 className="text-3xl font-semibold mb-8 text-accent">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <FaEnvelope className="text-2xl text-accent mr-4" />
                <p className="text-gray-800">info@evirsa.com</p>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-2xl text-accent mr-4" />
                <p className="text-gray-800">+91 8668369314 | +91 82754 26082
</p>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-2xl text-accent mr-4" />
                <p className="text-gray-800">Pune, Maharashtra, India</p>
              </div>
            </div>
            <div className="mt-12">
              <h4 className="text-2xl font-semibold mb-4 text-accent">Office Hours</h4>
              <p className="text-gray-800">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-800">Saturday: 10:00 AM - 2:00 PM</p>
              <p className="text-gray-800">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
