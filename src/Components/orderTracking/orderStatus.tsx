import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useGetOrderQuery } from "../../Redux/features/OrderSlice";


interface OrderStatusProps {
    orderId: string;
    currentStatus: string;
  }
  
  const OrderStatus: React.FC<OrderStatusProps> = ({ orderId, currentStatus }) => {
    const statuses = ["pending", "processing", "shipped", "delivered"];
  
    const { data, error, isLoading } = useGetOrderQuery({ orderId });
  
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading order status</div>;
    
    const currentStatusIndex = statuses.indexOf(currentStatus);
    const getStatusClass = (status: string) => {
      const statusIndex = statuses.indexOf(status);
      if (statusIndex <= currentStatusIndex) {
        return "bg-primary text-white";
      } else {
        return "bg-gray-200 text-black";
      }
    };
  
    const getLineClass = (index: number) => {
      return currentStatusIndex >= index + 1 ? "bg-primary" : "bg-gray-200";
    };
  
    return (
      <div className="flex items-center justify-center mt-8 gap-14">
        {statuses.map((status, index) => (
          <div key={status} className="flex items-center">
            <div className="flex flex-col items-center relative">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getStatusClass(status)} z-10`}>
              <FontAwesomeIcon icon={faCheck} className="text-white" />
              </div>
              <span className="mt-2 text-sm">{status}</span>
              {index < statuses.length - 1 && (
                <div
                  className={`absolute top-5 transform -translate-y-1/2 left-10 w-24 h-1 ${getLineClass(index)}`}
                ></div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

export default OrderStatus;
