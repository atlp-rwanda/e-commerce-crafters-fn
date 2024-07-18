import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItemList from "../Components/Cart/CartItemList";
import CartTotals from "../Components/Cart/CartTotals";
import Footer from "../Components/Homepage/Homepage_footer";
import Header from "../Components/Homepage/Homepage_header";
import { fetchCart, updateCart, deleteProductFromCart} from "../Redux/Reducer/singleproductSlice"; 
import { RootState } from "../Redux/store"; 

const Cart = () => {
  const dispatch = useDispatch();
  const userId = "userId"; // Replace with actual userId logic

  const cartState = useSelector((state: RootState) => state.cart);
  const { items: cartItems, loading, error } = cartState;

  useEffect(() => {
    dispatch(fetchCart(userId));
  }, [dispatch, userId]);

  const handleQuantityChange = (id: string, newQuantity: number) => {
    const product = cartItems.find(item => item.id === id);
    if (product) {
      dispatch(updateCart({ userId, productId: id, quantity: newQuantity }));
    }
  };

  const handleDelete = (id: string) => {
    dispatch(deleteProductFromCart({ userId, productId: id }));
  };

  const subTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountPercentage = 5;
  const deliveryFeePercentage = 3;
  const total = subTotal * (1 - discountPercentage / 100) + subTotal * (deliveryFeePercentage / 100);

  return (
    <>
      <Header />
      <div className="w-[90%] mx-auto my-[50px] p-4">
        <h1 className="text-xl font-semibold ml-10">
          Shopping Cart{" "}
          <span className="bg-gray-200 py-[4px] px-4 font-bold rounded-lg">
            0{cartItems.length}
          </span>
        </h1>
        <div className="flex pt-11">
          <CartItemList
            cartItems={cartItems}
            handleQuantityChange={handleQuantityChange}
            handleDelete={handleDelete}
          />
          <CartTotals
            subTotal={subTotal}
            deliveryFeePercentage={deliveryFeePercentage}
            discountPercentage={discountPercentage}
            total={total}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
