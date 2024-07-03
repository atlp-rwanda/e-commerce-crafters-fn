import React from "react";
import Reviews from "../Components/singleproduct/reviews";
import Sproduct from "../Components/singleproduct/Sproduct";
import SimilProduct from "../Components/singleproduct/similaryProduct";
import Header from "../Components/Homepage/Homepage_header";
import Footer from "../Components/Homepage/Homepage_footer";
import { useParams } from "react-router-dom";

const Singlepage = () => {
  const { id } = useParams();

	const productId = id || 'no api';

  
  return (
    <div>
      <Header />
      <Sproduct productId={productId}  />
      <Reviews productId={productId}  />
      <SimilProduct productId={productId}/>
      <Footer />
    </div>
  );
};

export default Singlepage;
