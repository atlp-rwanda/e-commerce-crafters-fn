import React from 'react';

const AboutCrafters: React.FC = () => {
  const imageUrl = 'https://www.vocso.com/blog/wp-content/uploads/2022/02/eCommerce-Website-Features-1920-x-1080.jpg'; 

  return (
    <section className="py-16 px-24 bg-white" id="about-crafters">
      <h2 className="text-3xl font-bold mb-8"> ABOUT <span className='text-orange-400'> CRAFTERS </span></h2>
      <div className="container flex gap-20">
        <div className="flex-none w-1/3 mb-8">
          <img src={imageUrl} alt="About Crafters" className="w-full h-80 rounded-lg" />
        </div>
        <div >
          <p className="text-gray-700 text-lg font-poppins">It is a long established fact that a reader will
          be distracted by the readable content of a page when looking at its layout. The point of using 
          Lorem Ipsum is that it has a more-or-less <br /><br /> normal distribution of letters, as opposed to using 
          'Content here, content here', making it look like readable English. Many desktop publishing 
          packages and web page editors now use Lorem Ipsum as their default model text, and a search 
          for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have 
          evolved over the years, sometimes by accident, <br /><br />  sometimes on purpose. making it look like readable
          English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search 
          for 'lorem ipsum'.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutCrafters;
