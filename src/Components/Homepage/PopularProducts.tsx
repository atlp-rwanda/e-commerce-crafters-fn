import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularProducts } from '../../Redux/features/PopularProductsSlice';
import { RootState, AppDispatch } from '../../Redux/store';

const PopularProducts: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading, error } = useSelector((state: RootState) => state.popularProducts);

  useEffect(() => {
    dispatch(fetchPopularProducts());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const displayProducts = products.slice(0, 10);

  return (
    <section className="py-16 px-6 sm:px-12 md:px-24 font-outfit bg-white">
      <div className="mb-8">
        <div className="flex items-center">
          <div className="w-24 h-2 bg-secondary mr-4"></div>
          <h2 className="text-xl sm:text-2xl font-bold text-black">POPULAR PRODUCTS</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {displayProducts.map((product) => (
          <div key={product.id} className="rounded-lg shadow-md p-4">
            <img src={product.image} alt={product.name} className="w-full h-48 sm:h-36 md:h-48 object-contain mb-4" />
            <p className="md:text-lg sm:text-sm text-gray-500">{product.category}</p>
            <h3 className="md:text-xl sm:text-lg text-secondary">{product.name}</h3>
            <div className="flex justify-between items-center mt-2">
              <p className="md:text-xl sm:text-lg font-semibold text-gray-900">{product.price} Rwf</p>
              <button className="text-secondary fas fa-shopping-cart text-xl sm:text-xl"></button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
