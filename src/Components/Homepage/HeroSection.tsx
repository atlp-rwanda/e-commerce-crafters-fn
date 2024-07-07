import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../Redux/store";
import { fetchImages } from "../../Redux/features/ProductsImagesSlice";
import { useTranslation } from "react-i18next";
const HeroSection: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { images, loading, error } = useSelector(
    (state: RootState) => state.productsImages
  );
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  useEffect(() => {
    if (images && images.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 1000);

            return () => clearInterval(interval);
        }
    }, [images]);

    console.log("Images from state:", images);

    return (
        <section className="bg-primary text-white text-xl sm:text-sm p-24 sm:p-6 md:p-12 lg:p-24 flex flex-col md:flex-row gap-8 md:gap-20 lg:gap-40 font-outfit h-screen mt-24">
            <div className="mt-8 mb-16 md:mb-0 md:w-1/2">
                <h1 className="text-4xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
                    <span className='text-secondary'>CRAFTERS</span> ONLINE SHOP
                </h1>
                <p className="mb-16 sm:text-sm md:text-xl">
                    Welcome to our online store! Whether you're a buyer looking for 
                    great <br className="hidden md:inline" /> deals or a seller wanting to showcase your products, our platform <br className="hidden md:inline" />
                    offers you the opportunity to connect and thrive. Explore our wide <br className="hidden md:inline" /> range of products and
                    create an account <a href="#" className='text-secondary font-bold'>here</a> to get started.
                </p>
                <div>
                    <button className="bg-secondary px-6 py-2 rounded-lg mr-4 mb-4 md:mb-0 md:text-lg">Shop Now</button>
                    <button className="bg-blue-900 px-6 py-2 rounded-lg md:text-lg">Contact Us</button>
                </div>
            </div>
            
            <div className=" mt-24 md:w-1/2 flex justify-center">
                {loading && <div>Loading...</div>}
                {error && <div>Error: {error}</div>}
                {!loading && !error && (!images || images.length === 0) && <div>No images found.</div>}
                
                {images && images.length > 0 && (
                    <img src={images[currentImageIndex]} alt="Home Images" className="w-full sm:w-auto max-w-md h-60 sm:h-36 md:h-60" />
                )}
            </div>
        </section>
    );
};

export default HeroSection;
