import React from "react";
import OrderDetails from "../Components/orderTracking/orderDetails";
import { ContactInfo } from "../Components/orderTracking/contactInfo";
import { OrderProductDetails } from "../Components/orderTracking/orderProductDetails";
import Navbar from "../Components/navBar";

export const OrderTrackingPage = () => {

  const orderId = "45062e66-56f1-473b-9803-f16f87b2afd5";
  const phoneNumber = '0787990099';
  const email = 'bernice@example.com';
  const contactName = 'bernice';
  const address = 'Kigali, Kicukiro';
  const products = [
    { productName: 'Nike Shoes', quantity: 3, price: 100, total: 300}
  ]

    return (
        <>
            <Navbar/>
            <div className="flex flex-col gap-20 h-screen p-4 lg:p-20 overflow-y-auto">
                <div className="order-details-container">
                    <OrderDetails
                        orderId={orderId}
                    />
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
                    <OrderProductDetails
                        products={products}
                        orderId={orderId}
                    />
                </div>

            </div>
        </>
    )
}