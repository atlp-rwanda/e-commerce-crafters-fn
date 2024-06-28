import React from "react";
import { useTranslation } from "react-i18next";
const ContactSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="pl-64 py-16 bg-gray-100 flex justify-center font-poppins text-xl">
      <div className="flex-grow md:w-1/2">
        <h2 className="text-primary text-4xl font-bold mb-4">
          {t("Get In Touch With Us")}
        </h2>
        <h2 className="text-secondary text-3xl mb-16">
          {t("We Are Here To Help")}
        </h2>
        <div className="flex flex-col">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <div className="flex flex-grow items-center space-x-8 mb-16">
              <i className="fas fa-phone text-primary"></i>
              <p className="text-primary">
                {t(
                  "If you have an urgent business concern please contact us at"
                )}
                07********0
              </p>
            </div>
            <div className="bg-primary flex justify-center space-x-4 mt-4 p-4 text-white text-3xl w-full max-w-md rounded-xl ">
              <a href="#">
                <i className="fab fa-facebook mr-4"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter mr-4"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin mr-4"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram mr-4"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 text-lg">
        <h2 className="text-secondary text-3xl font-bold mb-16">
          {t("Send Us Message")}
        </h2>
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder={t("Your Name")}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder={t("Your Email")}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder={t("Your Message")}
              className="w-full p-2 border rounded"
            ></textarea>
          </div>
          <button className="bg-primary flex justify-center space-x-4 mt-4 p-4 text-white text-xl w-full max-w-md rounded-xl ">
            {t("Send Message")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;