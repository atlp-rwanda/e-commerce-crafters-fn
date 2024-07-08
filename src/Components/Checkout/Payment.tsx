import React from "react";
import { useTranslation } from "react-i18next";

const Payment = () => {
  const { t } = useTranslation();
  return (
    <div className="payment-details w-[550px] rounded-[5px] hover:shadow-md hover:shadow-black">
      <header className="bg-blue-900 text-white text-center p-3 rounded-t-[5px]">
        {t("PAYMENT DETAILS")}
      </header>
      <div className="payment-content px-[30px] py-[50px]">
        <form action="" className="p-[5px] w-[90%] m-auto">
          <div className="Mots w-full flex justify-between mb-5">
            <input
              type="text"
              className="name first w-[49%] h-[35px] rounded-[7px] bg-gray-200 pl-[15px]"
              placeholder={t("First Name")}
            />
            <input
              type="text"
              className="name second w-[49%] h-[35px] rounded-[7px] bg-gray-200 pl-[15px]"
              placeholder={t("Second Name")}
            />
          </div>
          <div className="email w-full mb-5">
            <input
              className="w-full h-[35px] rounded-[7px] bg-gray-200 pl-[15px]"
              type="email"
              placeholder={t("Email Address")}
            />
          </div>
          <div className="contacts w-full flex justify-between mb-5">
            <input
              type="numbers"
              className="contact number w-[49%] h-[35px] rounded-[7px] bg-gray-200 pl-[15px]"
              placeholder={t("Phone Number")}
            />
            <input
              type="text"
              className="contact street w-[49%] h-[35px] rounded-[7px] bg-gray-200 pl-[15px]"
              placeholder={t("Street")}
            />
          </div>
          <div className="location w-full flex justify-between mb-5">
            <select
              className="w-[49%] h-[35px] rounded-[7px] bg-gray-200 pl-[15px]"
              name="Country"
              id=""
              title="Country"
            ></select>
            <select
              className="w-[49%] h-[35px] rounded-[7px] bg-gray-200 pl-[15px]"
              name="City"
              id=""
              title="City"
            ></select>
          </div>
          <div className="delivery w-full mb-5">
            <select
              className="w-full h-[35px] rounded-[7px] bg-gray-200 pl-[15px]"
              name="delivery"
              id=""
              title="delivery"
            ></select>
          </div>
          <div className="method w-full mb-4">
            <p>{t("Payment method")}:</p>
            <label htmlFor="method">
              <input type="radio" name="method" className="ml-3 my-3" /> Stripe
            </label>
          </div>
          <button className="payment bg-blue-900 w-[96%] h-10 rounded-[7px] m-auto text-white hover:bg-blue-800">
            {t("Continue To Payment")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
