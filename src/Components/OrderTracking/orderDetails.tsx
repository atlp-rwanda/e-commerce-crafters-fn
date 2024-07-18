import React from "react";
import { useGetOrderQuery } from "../../Redux/OrderSlice";

interface OrderDetailsProps {
  orderId?: string;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({ orderId }) => {
  const { data: order, error, isLoading } = useGetOrderQuery({ orderId });

  if (error) {
    console.error("Error fetching order:", error);
    return <p>Error fetching order details</p>;
  }

  if (isLoading) return <p>Loading...</p>;

  if (!order) return <p>No order details available</p>;

  const { status, createdAt, expectedDeliveryDate } = order;

  return (
    <>
      <div className=" ">
        <div className="font-poppins font-bold pb-8">
          <p>Order #{orderId}</p>
        </div>

        <div className="flex flex-col gap-8 justify-between pb-8  lg:flex-row font-outfit">
          <div className="placed-date">
            <p className="text-gray-400">Placed On</p>
            <p>
              {new Date(createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
          <div className="expected-delivery pr-10">
            <p className="text-gray-400">Expected Delivery Date</p>
            <p>
              {expectedDeliveryDate
                ? new Date(expectedDeliveryDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "N/A"}
            </p>
          </div>
        </div>

      </div>
    </>
  );
};

export default OrderDetails;
