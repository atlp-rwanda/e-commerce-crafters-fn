import React from 'react';
import Header from '../Components/Homepage/Homepage_header';
import Footer from '../Components/Homepage/Homepage_footer';
import ContactSection from '../Components/Homepage/ContactSection';
import HeroSection from '../Components/Homepage/HeroSection';
import BestDeals from '../Components/Homepage/BestDeals';
import AboutCrafters from '../Components/Homepage/AboutCrafters'


const Homepage: React.FC = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutCrafters />
      <BestDeals />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Homepage;
