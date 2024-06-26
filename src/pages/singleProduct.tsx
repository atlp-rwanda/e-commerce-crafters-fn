import React from "react";
import { useParams } from "react-router-dom";

const singleProduct = () => {
	  const { id } = useParams();
  return (
	<div>
	  <h1>Single Product Page</h1>
	  <p>Product ID: {id}</p>
	</div>
  );
}

export default singleProduct;