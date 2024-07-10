import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../Redux/store";
import { useTranslation } from "react-i18next";
import { fetchImages } from "../../Redux/HomePage/ProductsImagesSlice";
import Skeleton from "react-loading-skeleton";

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
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [images]);

  console.log("Images from state:", images);
  const { t } = useTranslation();
  return (
    <section className="bg-primary text-white text-xl px-[10px] py-[15vh] h-[100vh]  md:px-[50px] lg:px-[100px] flex gap-[20px] space-x-40 font-poppins">
      <div className=" w-full lg:w-1/2 flex flex-col gap-[20px]">
        <h1 className=" text-[30px] font-[800]">
          <span className="text-secondary">CRAFTERS</span> ONLINE SHOP
        </h1>
        <p className="text-[16px] font-poppins">
          {" "}
          {t(
            " Welcome to our online store! Whether you're a buyer looking for great"
          )}
          {t(
            "deals or a seller wanting to showcase your products, our platform"
          )}
          {t(
            "offers you the opportunity to connect and thrive. Explore our wide"
          )}
          {t("range of products and create an account")}
          <a href="#" className="text-secondary font-bold px-3">
            {t("  here  ")}
          </a>{" "}
          {t("to get started")}{" "}
        </p>
        <div className="flex flex-row gap-[10px]">
          <button className="bg-secondary  w-full py-4 rounded-lg font-outfit">
            {t("Shop Now")}
          </button>
          <button className="bg-[#08447D]  w-full py-4 rounded-lg font-outfit">
            {t("Contact Us")}
          </button>
        </div>
      </div>

<<<<<<< HEAD
      <div className="w-full lg:w-1/2">
        <div className="w-[500px] h-[400px]">
          {loading && (
            <div className="w-[500px] h-[400px">
              <Skeleton height={400} />
=======
    return (
        <section className="bg-primary text-white text-xl sm:text-sm p-24 sm:p-6 md:p-12 lg:p-24 flex flex-col md:flex-row sm:gap-0 md:gap-20 lg:gap-40 font-outfit md:h-screen sm:h-auto mt-24 sm:mt-20">
            <div className="mt-8 sm:mb-0 md:mb-16 md:mb-0 md:w-1/2">
                <h1 className="text-4xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
                    <span className='text-secondary'>CRAFTERS</span> ONLINE SHOP
                </h1>
                <p className="mb-16 sm:text-sm md:text-xl">
                    Welcome to our online store! Whether you're a buyer looking for 
                    great <br className="hidden md:inline" /> deals or a seller wanting to showcase your products, our platform <br className="hidden md:inline" />
                    offers you the opportunity to connect and thrive. Explore our wide <br className="hidden md:inline" /> range of products and
                    create an account <a href="/signup" className='text-secondary font-bold'>here</a> to get started.
                </p>
                <div>
                    <a href="/products" className="bg-secondary px-6 py-2 rounded-lg mr-4 mb-4 md:mb-0 md:text-lg">Shop Now</a>
                    <a href="#ContactSection" className="bg-blue-900 px-6 py-2 rounded-lg md:text-lg">Contact Us</a>
                </div>
>>>>>>> a9f5771 (adjusted responsiveness)
            </div>
          )}
          {error && <div>Error: {error}</div>}
          {!loading && !error && (!images || images.length === 0) && (
            <div>No images found.</div>
          )}

          {images && images.length > 0 && (
            <img
              src={images[currentImageIndex]}
              alt="Home Images"
              className="w-full h-full object-cover rounded-lg"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
