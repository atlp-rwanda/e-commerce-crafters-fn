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
          {t("Welcome")}
          <a href="#" className="text-secondary font-bold">
            {t("here")}
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

      <div className="w-full lg:w-1/2">
        <div className="w-[500px] h-[400px]">
          {loading && <div className="w-[500px] h-[400px">
            <Skeleton height={400} />
            </div>}
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
