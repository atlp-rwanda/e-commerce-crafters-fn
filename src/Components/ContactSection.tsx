import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section className="pl-64 py-16 bg-gray-100 flex justify-center text-xl">
      <div className='flex-grow md:w-1/2'>
      <h2 className="text-[#013362] text-4xl font-bold mb-4">Get In Touch With Us</h2>
      <h2 className="text-orange-500 text-3xl mb-16">We Are Here To Help</h2>
      <div className="flex flex-col">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <div className="flex flex-grow items-center space-x-8 mb-16">
            <i className="fas fa-phone text-[#013362]"></i>
            <p className='text-[#013362]'>If you have an urgent business concern please contact us at 07********0</p>
          </div>
          <div className="bg-[#013362] flex justify-center space-x-4 mt-4 p-4 text-white text-3xl w-full max-w-md rounded-xl ">
            <a href="#"><i className="fab fa-facebook mr-4"></i></a>
            <a href="#"><i className="fab fa-twitter mr-4"></i></a>
            <a href="#"><i className="fab fa-linkedin mr-4"></i></a>
            <a href="#"><i className="fab fa-instagram mr-4"></i></a>
          </div>
        </div>
      </div>
      </div>
      <div className="md:w-1/2 text-lg">
        <h2 className="text-orange-500 text-3xl font-bold mb-16">Send Us Message</h2>
          <form>
            <div className="mb-4">
              <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
              <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
              <textarea placeholder="Your Message" className="w-full p-2 border rounded"></textarea>
            </div>
            <button className="bg-[#013362] flex justify-center space-x-4 mt-4 p-4 text-white text-xl w-full max-w-md rounded-xl ">Send Message</button>
          </form>
      </div>
    </section>
  );
};

export default ContactSection;
