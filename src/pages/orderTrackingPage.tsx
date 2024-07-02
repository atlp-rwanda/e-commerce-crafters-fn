import React from "react";
import { ContactInfo } from "../Components/OrderTracking/contactInfo";
import OrderDetails from "../Components/OrderTracking/orderDetails";
import { OrderProductDetails } from "../Components/OrderTracking/orderProductDetails";
import Navbar from "../Components/navBar";

export const OrderTrackingPage = () => {
      const orderId = "3767bf83-339a-4bd1-bccc-c77435272cf5";
    // const orderId = "3945e594-cc56-41d1-9c6a-a056cc848a05"; shipped
  const phoneNumber = "0787990099";
  const email = "bernice@example.com";
  const contactName = "bernice";
  const address = "Kigali, Kicukiro";
  const products = [
    { productName: "Nike Shoes", quantity: 3, price: 100, total: 300 },
  ];

  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-20 h-screen p-4 lg:p-20 overflow-y-auto">
        <div className="order-details-container">
          <OrderDetails orderId={orderId} />
        </div>
        <div className="contact-info-container">
          <ContactInfo
            address={address}
            contactName={contactName}
            email={email}
            phoneNumber={phoneNumber}
            orderId={orderId}
          />
        </div>

        <div className="order-products-details-container">
          <OrderProductDetails products={products} orderId={orderId} />
        </div>
      </div>
    </>
  );
};
