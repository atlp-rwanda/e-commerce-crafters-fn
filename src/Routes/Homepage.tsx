import React from 'react';
import Header from '../Components/Homepage_header';
import Footer from '../Components/Homepage_footer';
import ContactSection from '../Components/ContactSection';
import HeroSection from '../Components/HeroSection';
import BestDeals from '../Components/BestDeals';
import AboutCrafters from '../Components/AboutCrafters'


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
