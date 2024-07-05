import React from "react";
import Reviews from "../Components/SingleProduct/reviews";
import Sproduct from "../Components/SingleProduct/Sproduct";
import SimilProduct from "../Components/singleproduct/similaryProduct";
import Header from "../Components/Homepage/Homepage_header";
import Footer from "../Components/Homepage/Homepage_footer";
import { useParams } from "react-router-dom";

const Singlepage = () => {
  const { id } = useParams();

	const productId = id || 'no api';

  
  return (
    <div>
      {/* <Header /> */}
      <div className="flex flex-col justify-center w-full">

    <Sproduct productId={productId} />
    <Reviews productId={productId} />
    <SimilProduct productId={productId} />
 
</div>
      {/* <Footer /> */}
    </div>
  );
};

export default Singlepage;
