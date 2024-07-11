import React from "react";

interface Props {
    status: 'pending'| 'processing' | 'shipped' | 'delivered';

}

const StatusIndicator: React.FC<Props> = ({ status }) => {
    const colorClass = status === 'pending' ? 'bg-primary':
                    status === 'processing' ? 'bg-secondary':
                    status === 'shipped' ? 'bg-green-400':
                    status === 'delivered' ? 'bg-green-400': 'bg-gray-500'

    return (
        <span className={`inline-block w-2 h-2 rounded-full ${colorClass} mr-2`}></span>
    )
    
}

interface OrderProps {
    status: 'pending'| 'processing' | 'shipped' | 'delivered',
    orderId: string,
    expectedDeliveryDate: Date,
    orderDate: Date
}

const Order: React.FC<OrderProps> = ({ orderId, orderDate, expectedDeliveryDate, status}) => {
    return (
        <div className="bg-gray-500 hover:shadow-md rounded-lg p-6 mb-4 flex justify-between">
           
            <div className="flex gap-10">
                <div>
                <div className="text-sm text-gray-400">Order No.</div>
                <div>{orderId}</div>
                </div>
            
                <div>
                    <div className="text-sm text-gray-400">Order Date</div>
                    <div>{orderDate.toLocaleDateString()}</div>
                </div>
                <div>
                    <div className="text-sm text-gray-400">Expected Delivery Date</div>
                    <div>{expectedDeliveryDate.toLocaleDateString()}</div>
                </div>
                <div>
                <div className="text-sm text-gray-400">Status</div>
                    <StatusIndicator status={status} />
                    <span className="capitalize">{status}</span>
                </div>
            </div>
            <div className="mt-4">
                <button className="text-blue-100 hover:underline">View Details</button>
            </div>
        </div>
    )
    
}

interface Order {
    status: 'pending'| 'processing' | 'shipped' | 'delivered',
    orderId: string,
    expectedDeliveryDate: Date,
    orderDate: Date
}

interface OrderTableProps {
    orders: Order[]
}

const OrderTable: React.FC<OrderTableProps> = ({ orders }) => {
    return(
        <div className="container m-10">
            
                    {orders.map((order) => (
                        <Order
                            key={order.orderId} 
                            orderId={order.orderId} 
                            orderDate= {order.orderDate}
                            expectedDeliveryDate={order.expectedDeliveryDate} 
                            status={order.status}
                        />
                    ))}
                
        </div>
    )
}

export default OrderTable;