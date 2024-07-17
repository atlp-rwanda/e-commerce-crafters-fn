import React from "react";
import { useLocation } from "react-router-dom";

interface TopProduct {
  productId: string;
  name: string;
  totalRevenue: number;
  image: string;
}


const SalesPreview: React.FC = () => {
  const location = useLocation()
  const { state } = location;

  if (!state || !state.datas) {
    return <div>No data available</div>;
  }

  const { datas } = state as { datas: TopProduct[] };
  console.log(datas)

  let id = 1;
  return (
    <div className="w-full h-fit m-auto flex my-12 pl-24 justify-start font-poppins">
      <div className="w-[40%]   p-4  border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Top Products
          </h5>
          <a
            href="#"
            className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            View all
          </a>
        </div>
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            {datas.map((product) => (
              <li className="py-3 sm:py-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="w-20 h-20 rounded-full"
                      src={product.image}
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                     {/* { id++} */}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      {product.name}
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {product.totalRevenue}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SalesPreview;
