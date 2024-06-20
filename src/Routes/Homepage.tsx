import React from 'react';
import Header from '../Components/Homepage_header';
import Footer from '../Components/Homepage_footer';
import ContactSection from '../Components/ContactSection';


const Homepage: React.FC = () => {
  return (
    <div>
      <Header />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Homepage;
