import React from "react";
import { useGetOrderQuery } from "../../Redux/OrderSlice";

interface ContactInfoProps {
  address: String;
  contactName: string;
  email: string;
  phoneNumber: string;
  orderId: string;
}
export const ContactInfo: React.FC<ContactInfoProps> = ({
  address,
  contactName,
  email,
  phoneNumber,
  orderId,
}) => {
  const { data, error, isLoading } = useGetOrderQuery({ orderId });

  if (error) {
    console.error("Error fetching order:", error);
    return <p>Error fetching order details</p>;
  }

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No order details available</p>;

  const deliveryAddress = data.deliveryAddress;

  return (
    <>
      <div className="flex flex-col gap-12 lg:flex-row justify-between border-b pb-8  font-outfit pl-10 lg:pl-0">
        <div className="delivery-address ">
          <h3 className="font-bold pb-2 font-poppins">Delivery Address</h3>
          <p className="text-gray-300">
            {deliveryAddress.city}, {deliveryAddress.street}
          </p>
        </div>

        <div className="contact">
          <h3 className="font-bold pb-2 font-poppins">Contact Details</h3>
          <p className="text-gray-300">Name: {contactName}</p>
          <p className="text-gray-300">Tel: {phoneNumber}</p>
          <p className="text-gray-300">Email: {email}</p>
        </div>
      </div>
    </>
  );
};
