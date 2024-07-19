import React, {useEffect, useState} from "react";
import { ContactInfo } from "../Components/OrderTracking/contactInfo";
import OrderDetails from "../Components/OrderTracking/orderDetails";
import { OrderProductDetails } from "../Components/OrderTracking/orderProductDetails";
import OrderStatus from "../Components/OrderTracking/orderStatus";
import Navbar from "../Components/navBar";
import { getCookie } from "../Components/OrderTracking/authUtils";
import { useGetOrderQuery, useGetUserInfoQuery } from "../Redux/OrderSlice";

export const OrderTrackingPage = () => {
      const orderId = "2b701ee8-913f-422f-8f23-902a7687719a";
    // const orderId = "3945e594-cc56-41d1-9c6a-a056cc848a05"; shipped
  const phoneNumber = "0787990099";
  const [userId, setUserId] = useState('');
  const [orderStatus, setOrderStatus] = useState('pending');

  const { data: orderData, error: orderError, isLoading: orderLoading } = useGetOrderQuery({ orderId });

  useEffect(() => {
    if(orderData){
      setUserId(orderData.userId);
      setOrderStatus(orderData.status);
    }

  }, [orderData]);

  const { data: userInfo, error: userInfoError, isLoading: userInfoLoading } = useGetUserInfoQuery({ userId }, { skip: !userId });
  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-20 h-screen p-10 lg:p-20">
        <div className="order-details-container border-b pb-8">
          <OrderDetails orderId={orderId} />
          <OrderStatus orderId={orderId} currentStatus={orderStatus} />
        </div>
        <div className="contact-info-container">
          <ContactInfo
            contactName={userInfo?.name || ''}
            email={userInfo?.email || ''}
            phoneNumber={phoneNumber}
            orderId={orderId}
          />
        </div>

        <div className="pb-10">
          <OrderProductDetails orderId={orderId} />
        </div>
      </div>
    </>
  );
};