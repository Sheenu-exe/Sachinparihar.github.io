import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatsCooking from './components/WhatsCooking';
import ShackVibe from './components/ShackVibe';
import CustomerBuzz from './components/CustomerBuzz';
import FindTheShack from './components/FindTheShack';
import WhatsAppFloat from './components/WhatsAppFloat';
import Footer from './components/Footer';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'menu':
        return <MenuPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return (
          <>
            <Hero />
            <WhatsCooking />
            <ShackVibe />
            <CustomerBuzz />
            <FindTheShack />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      {renderPage()}
      <Footer currentPage={currentPage} onNavigate={handleNavigate} />
      <WhatsAppFloat />
    </div>
  );
}

export default App;