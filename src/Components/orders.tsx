import React from "react";
import OrderTable from "./orderComponent";

interface Order {
    orderId: string;
    orderDate: Date;
    expectedDeliveryDate: Date;
    status: 'pending'| 'processing' | 'shipped' | 'delivered';
}

const OrderComponent = () => {
    const orders: Order[] = [
        { orderId: '01', orderDate: new Date('2024-05-24'),expectedDeliveryDate: new Date('2024-05-24'), status: 'pending' },
        { orderId: '02', orderDate: new Date('2024-05-24'), expectedDeliveryDate: new Date('2024-05-25'), status: 'processing' },
        { orderId: '03', orderDate: new Date('2024-05-24'), expectedDeliveryDate: new Date('2024-05-26'), status: 'delivered' },
      ];
      

    return(
        <div className="font-outfit">
            <div className="font-semibold m-10">
                My Orders
            </div>
            <OrderTable orders={orders}/>
        </div>
    )
}

export default OrderComponent;