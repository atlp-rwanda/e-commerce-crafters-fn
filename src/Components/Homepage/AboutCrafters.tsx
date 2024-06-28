import React from "react";
import { useTranslation } from "react-i18next";
const AboutCrafters: React.FC = () => {
  const imageUrl =
    "https://www.vocso.com/blog/wp-content/uploads/2022/02/eCommerce-Website-Features-1920-x-1080.jpg";
  const { t } = useTranslation();
  return (
    <section
      className="py-16 px-24 bg-white font-poppins text-xl"
      id="about-crafters"
    >
      <h2 className="text-3xl font-bold mb-8">
        {" "}
        ABOUT <span className="text-secondary"> CRAFTERS </span>
      </h2>
      <div className="container flex gap-20">
        <div className="flex-none w-1/3 mb-8">
          <img
            src={imageUrl}
            alt="About Crafters"
            className="w-full h-80 rounded-lg"
          />
        </div>
        <div>
          <p className="text-gray-700">{t("AboutUs")}</p>
        </div>
      </div>
    </section>
  );
};

export default AboutCrafters;
