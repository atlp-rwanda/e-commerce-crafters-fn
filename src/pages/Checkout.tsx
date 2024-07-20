import React, { useEffect, useState } from "react";
import OrderSummary from "../Components/Checkout/OrderSummary";
import Payment from "../Components/Checkout/Payment";
import useFetch from "../Components/Checkout/UseFetch";
import Footer from "../Components/Homepage/Homepage_footer";
import Header from "../Components/Homepage/Homepage_header";
import { useTranslation } from "react-i18next";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import { useGetCartQuery } from "../Redux/features/checkoutSlice";

const Checkout = () => {
   


  const userData: any = useAuthUser()
  const { data: cart, isLoading: load, isError: errorHere } = useGetCartQuery(userData.userId)
  const [totall,setToatal] = useState<number>(0)
  const {
    cartItems,
    setCartItems,
    subTotal,
    total,
    discountPercentage,
    deliveryFeePercentage,
  } = useFetch("http://localhost:5000/products");

  const handleDelete = (id: number) => {
    setCartItems((products) => products.filter((item) => item.id !== id));
  };
  const { t } = useTranslation();


  useEffect(() => {
    if (!load && cart) {
      let totalAmount = 0;
      cart.cartitem.forEach((item: any) => {
        totalAmount += item.price * item.quantity;
      });
      setToatal(totalAmount);
    }
  }, [cart, load]);
  return (
    <>
      <Header />
      <div className="all w-[80%] mt-24 mx-auto">
        {load ? ("") : (
        <div className="pay flex gap-[20px] justify-between m-auto ">
          <Payment totalAmount={totall} />
          <OrderSummary
            cartItems={cart.cartitem}
            subTotal={totall}
            deliveryFeePercentage={2}
            discountPercentage={2}
            total={totall}
            handleDelete={handleDelete}
          />
        </div>
        )}
        <a href="/products">
          <button className="bg-amber-600 px-32 py-3 rounded-lg text-2xl mx-[410px] my-20  text-white font-semibold hover:shadow-sm hover:shadow-black">
            {t("BACK TO HOME")}
          </button>
        </a>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
