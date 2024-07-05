import React from 'react';
import AboutCrafters from '../Components/Homepage/AboutCrafters';
import BestDeals from '../Components/Homepage/BestDeals';
import HeroSection from '../Components/Homepage/HeroSection';
import ContactSection from '../Components/Homepage/ContactSection';
import Header from '../Components/Homepage/Homepage_header';
import Footer from '../Components/Homepage/Homepage_footer';



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
