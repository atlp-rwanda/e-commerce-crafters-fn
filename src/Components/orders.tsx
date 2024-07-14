import React from "react";
import OrderTable from "./orderComponent";
import { useGetAllOrdersQuery } from "../Redux/OrderSlice";

interface Order {
    orderId: string;
    orderDate: Date;
    expectedDeliveryDate: Date;
    status: 'pending'| 'processing' | 'shipped' | 'delivered';
}

const OrderComponent = () => {
    function getAuthCookie() {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            const [name, value] = cookie.trim().split('=');
            if (name === '_auth') {
                return decodeURIComponent(value);
            }
        }
        return null;
    }

    const token = getAuthCookie();
    console.log('token ', token);
    const { data: orders, isLoading, error } = useGetAllOrdersQuery({ token });

    return (
        <div className="font-outfit">
            <div className="font-semibold m-10">
                My Orders
            </div>
            {isLoading ? (
                <div>Loading orders...</div>
            ) : error ? (
                <div>Error loading orders</div>
            ) : !orders || orders.length === 0 ? (
                <div>No orders available</div>
            ) : (
                <OrderTable orders={orders} />
            )}
        </div>
    );
};

export default OrderComponent;
