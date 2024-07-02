import React from "react";
import Reviews from "../Components/singleproduct/reviews";
import Sproduct from "../Components/singleproduct/Sproduct";
import SimilProduct from "../Components/singleproduct/similaryProduct";
import Header from "../Components/Homepage/Homepage_header";
import Footer from "../Components/Homepage/Homepage_footer";

const Singlepage = () => {
  const productId =""
  return (
    <div>
      <Header />
      <Sproduct  />
      <Reviews  />
      <SimilProduct productId={productId} />
      <Footer />
    </div>
  );
};

export default Singlepage;
