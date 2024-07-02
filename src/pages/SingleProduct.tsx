import React from "react";
import { useParams } from "react-router-dom";

const singleProduct = () => {
  const { id } = useParams();
  return (
    <div className="text-center font-bold">
      <h1>Single Product Page</h1>
      <p>Product ID: {id}</p>
      <a href="/cart">
        <button className="bg-[#203b57] text-white py-2 px-4 border-none rounded-md cursor-pointer text-base hover:bg-[#004494]">
          Add to Cart
        </button>
      </a>
    </div>
  );
};

export default singleProduct;
