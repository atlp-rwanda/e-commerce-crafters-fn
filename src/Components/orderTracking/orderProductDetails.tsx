import React from "react";
import { useGetOrderQuery } from "../../Redux/features/OrderSlice";

interface Product {
    productName: string,
    quantity: number,
    price: number,
    total: number
}

interface OrderDetailsProps {
    products: Product[],
    orderId: string
}

export const OrderProductDetails:React.FC<OrderDetailsProps> = ({ products, orderId }) => {
    const {data: product, error, isLoading} = useGetOrderQuery({ orderId });

    if(error){
        console.error('Error fetching order: ', error);
        return <p>Error fetching product details</p>
    }

    if(isLoading) return <p>Loading...</p>

    if(!product) return <p>No product found </p>

    const { productName, quantity, price, total } = product;
    return(
        <>
            <div className="container mx-auto font-outfit">
                <h3 className="font-bold mb-4 text-lg font-poppins">Order Details</h3>
                <div>
                    <table className="min-w-full bg-white">
                    <thead>
                        <tr className=" text-left">
                            <th className="text-primary pr-8">Product</th>
                            <th className="text-primary">Quantity</th>
                            <th className="text-primary">Price</th>
                            <th className="text-primary">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={index} className="py-4">
                                <td>{product.productName}</td>
                                <td>{product.quantity}</td>
                                <td>{product.price}</td>
                                <td>{product.total}</td>
                            </tr>
                        ))}
                        
                    </tbody>

                    </table>
                    

                </div>
            </div>
        </>
    )
}
