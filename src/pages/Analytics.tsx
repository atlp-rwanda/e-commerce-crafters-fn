import React, { useEffect, useState } from "react";
import OrderStatus from "../Components/Analytics/OrderStatus";
import axios from "axios";
import SellingReport from "../Components/Analytics/SellingReport";

interface DeliveryAddress {
  city: string;
  street: string;
}

interface Product {
  productId: string;
  name: string;
  quantity: number;
  price: number;
}

interface Order {
  createdAt: string;
  deliveryAddress: DeliveryAddress;
  expectedDeliveryDate: string | null;
  orderId: string;
  paymentMethod: string;
  products: Product[];
  status: string;
  totalAmount: number | null;
  updatedAt: string;
  userId: string;
}

const Analytics = () => {
  const [statusCounts, setStatusCounts] = useState<{ [key: string]: number }>(
    {}
  );

  useEffect(() => {
    axios.get<Order[]>("http://localhost:5000/order/getAllOrder").then((res) => {
      console.log(res.data);

      const counts: { [key: string]: number } = {};
      res.data.forEach((order) => {
        counts[order.status] = (counts[order.status] || 0) + 1;
      });
      setStatusCounts(counts);
    });
  }, []);

  return (
    <div className="font-poppins">
      <h1>Order Statuses:</h1>
      <OrderStatus statusCounts={statusCounts} />
      {/* <SellingReport/> */}
    </div>
  );
};

export default Analytics;
