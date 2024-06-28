import React from "react";
import CartItemList from "../Components/Cart/CartItemList";
import useFetch from "../Components/Effects/useFetch";
import CartTotals from "../Components/Cart/CartTotals";
import Header from "../Components/Homepage/Homepage_header";
import Footer from "../Components/Homepage/Homepage_footer";
const Cart = () => {
    const {cartItems, setCartItems, subTotal, total, discountPercentage, deliveryFeePercentage} = useFetch('http://localhost:5000/products');



    const handleQuantityChange = (id:number , newQuantity:number) => {
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({quantity: Math.max(1,newQuantity)})
    
        })
        .then(response => {
            if(!response.ok) {
                throw new Error('network response was not ok')
            }

            return response.json()
        })
        .then(updatedItem => {
            setCartItems(products => 
                products.map(item =>
                    item.id === id 
                        ? { ...item, quantity: updatedItem.quantity } 
                        : item
                )
            );
        })
        .catch(error => console.error('Error updating quantity:', error))
    };

    const handleDelete = (id: number) => {
        setCartItems(products => products.filter(item => item.id !== id));
    };

   

    return (
        <>
        <Header/>
        <div className="w-[90%] mx-auto my-[50px] p-4">
        <h1 className="text-xl font-semibold ml-10">Shopping Cart <span className="bg-gray-200 py-[4px] px-4 font-bold rounded-lg">0{cartItems.length}</span></h1>
        <div className="flex pt-11">
        <CartItemList cartItems={cartItems} handleQuantityChange={handleQuantityChange} handleDelete={handleDelete}/>
        <CartTotals   subTotal={subTotal} deliveryFeePercentage={deliveryFeePercentage} discountPercentage={discountPercentage} total={total}/>
        </div>
        </div>
        <Footer/>
        </>
    );
};

export default Cart;
