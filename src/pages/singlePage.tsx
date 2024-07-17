import React from "react";
import Reviews from "../Components/SingleProduct/reviews";
import Sproduct from "../Components/SingleProduct/Sproduct";
import SimilProduct from "../Components/SingleProduct/similaryProduct";

const Singlepage = () => {
  return (
    <div>
      <Sproduct />
      <Reviews />
      <SimilProduct />
    </div>
  );
};

export default Singlepage;
