import React, {useEffect, useState} from "react";
import { ContactInfo } from "../Components/OrderTracking/contactInfo";
import OrderDetails from "../Components/OrderTracking/orderDetails";
import { OrderProductDetails } from "../Components/OrderTracking/orderProductDetails";
import OrderStatus from "../Components/OrderTracking/orderStatus";
import Navbar from "../Components/navBar";
import { getCookie } from "../Components/OrderTracking/authUtils";
import { useGetOrderQuery, useGetUserInfoQuery } from "../Redux/OrderSlice";
import { useParams } from "react-router-dom";
import Header from "../Components/Homepage/Homepage_header";

export const OrderTrackingPage = () => {
  const { orderId } = useParams();

  const [userId, setUserId] = useState('');
  const [orderStatus, setOrderStatus] = useState('pending');

  const { data: orderData, error: orderError, isLoading: orderLoading } = useGetOrderQuery({orderId});

  useEffect(() => {
    console.log("Attempting to fetch order with ID:", orderId);
    if(orderData){
      setUserId(orderData.userId);
      setOrderStatus(orderData.status);
    }

  }, [orderData]);

  const { data: userInfo, error: userInfoError, isLoading: userInfoLoading } = useGetUserInfoQuery({ userId }, { skip: !userId });


  if(orderError) return <div>Error loading order</div>
  return (
    <>
      <Header/>
      <div className="flex flex-col gap-20 h-screen p-10 lg:p-20 mt-20">
        <div className="order-details-container border-b pb-8">
          <OrderDetails orderId={orderId} />
          <OrderStatus orderId={orderId} currentStatus={orderStatus} />
        </div>
        <div className="contact-info-container">
          <ContactInfo
            contactName={userInfo?.name || ''}
            email={userInfo?.email || ''}
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