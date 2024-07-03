

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { fetchSimilarProducts } from "../../Redux/Action/singleProduct";
import ProductCard from "../ProductsPage/productCard";

interface SimilarProductProps {
  productId: string;
}

const SimilarProduct: React.FC<SimilarProductProps> = ({ productId }) => {
  const dispatch = useDispatch();
  const similarProducts = useSelector((state: RootState) => state.similarProducts.similarProducts);
  const status = useSelector((state: RootState) => state.similarProducts.status);
  const error = useSelector((state: RootState) => state.similarProducts.error);

  useEffect(() => {
    if (productId) {
      // @ts-ignore
      dispatch(fetchSimilarProducts(productId));
    }
  }, [dispatch, productId]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="similar-products-container">
      <div className="h-32">
        <div className="font-extrabold text-center text-2xl">
          Related Products
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 justify-center item-center">
        {similarProducts && similarProducts.map((product) => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SimilarProduct;
