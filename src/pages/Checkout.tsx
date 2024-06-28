import React from "react";
import OrderSummary from "../Components/Checkout/OrderSummary";
import Payment from "../Components/Checkout/Payment";
import useFetch from "../Components/Effects/useFetch";
import Header from "../Components/Homepage/Homepage_header";
import Footer from "../Components/Homepage/Homepage_footer";

const Checkout = () => {
    const {cartItems, setCartItems, subTotal, total, discountPercentage, deliveryFeePercentage} = useFetch('http://localhost:5000/products')

    
    const handleDelete = (id: number) => {
        setCartItems(products => products.filter(item => item.id !== id));
    };

    return (
        <>
        <Header/>
        <div className="all w-[80%] mt-24 mx-auto">
            <div className="pay flex justify-between m-auto ">
                <Payment/>
                <OrderSummary cartItems={cartItems} subTotal={subTotal} deliveryFeePercentage={deliveryFeePercentage} discountPercentage={discountPercentage} total={total} handleDelete={handleDelete}/>
            </div>
        <button className="bg-amber-600 px-32 py-3 rounded-lg text-2xl mx-[410px] my-20 text-lg text-white font-semibold hover:shadow-sm hover:shadow-black">BACK TO HOME</button>
        </div>
        <Footer />
        </>
    );
}

export default Checkout;
