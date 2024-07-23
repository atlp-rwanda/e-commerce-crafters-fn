import React from "react";
import { useTranslation } from "react-i18next";
const AboutCrafters: React.FC = () => {
  const imageUrl =
    "https://www.vocso.com/blog/wp-content/uploads/2022/02/eCommerce-Website-Features-1920-x-1080.jpg";
  const { t } = useTranslation();
  return (
    <section
      className="py-16 px-6 sm:px-12 md:px-24 bg-white font-outfit text-lg md:text-xl min-h-screen"
      id="about-crafters"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-12 mt-32">
        {" "}
        {t("ABOUT")}
        <span className="text-secondary"> CRAFTERS </span>
      </h2>
      <div className="container flex flex-col md:flex-row gap-8 md:gap-20">
        <div className="flex-none w-full md:w-1/3 mb-8">
          <img
            src={imageUrl}
            alt="About Crafters"
            className="w-full h-60 sm:h-80 rounded-lg object-cover"
          />
        </div>
        <div>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl sm:text-sm">
            {t("AboutUs")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutCrafters;
