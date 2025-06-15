import React from 'react';
import Hero from './components/Hero';
import WhatsCooking from './components/WhatsCooking';
import ShackVibe from './components/ShackVibe';
import LoyaltyPerks from './components/LoyaltyPerks';
import CustomerBuzz from './components/CustomerBuzz';
import FindTheShack from './components/FindTheShack';
import WhatsAppFloat from './components/WhatsAppFloat';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Hero />
      <WhatsCooking />
      <ShackVibe />
      <LoyaltyPerks />
      <CustomerBuzz />
      <FindTheShack />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;