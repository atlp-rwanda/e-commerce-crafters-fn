import React from 'react';

export interface Product {
    id: string;
    name: string;
    category: string;
    price: string;
    image: string;
  }

const dummyProducts: Product[] = [
    {
      id: '1',
      name: 'Rolex Watch',
      category: 'Watches',
      price: '3,013,008',
      image: 'https://tse2.mm.bing.net/th?id=OIP.BzDXCusCi3hLir9c1CbEVQHaKT&pid=Api&P=0&h=220',
    },
    {
      id: '2',
      name: 'iPhone 13',
      category: 'Mobile Phones',
      price: '1,200,000',
      image: 'https://tse3.mm.bing.net/th?id=OIP.2o3FJBnp6m3sbSMj-BHr1wHaJc&pid=Api&P=0&h=220',
    },
    {
      id: '3',
      name: 'Sony Headphones',
      category: 'Electronics',
      price: '300,000',
      image: 'https://tse1.mm.bing.net/th?id=OIP.H8rRfXMFSfNuV1sHkU9cLAHaHa&pid=Api&P=0&h=220',
    },
    {
        id: '3',
        name: 'Sony Headphones',
        category: 'Electronics',
        price: '300,000',
        image: 'https://tse1.mm.bing.net/th?id=OIP.H8rRfXMFSfNuV1sHkU9cLAHaHa&pid=Api&P=0&h=220',
    },
    {
        id: '1',
        name: 'Rolex Watch',
        category: 'Watches',
        price: '3,013,008',
        image: 'https://tse2.mm.bing.net/th?id=OIP.BzDXCusCi3hLir9c1CbEVQHaKT&pid=Api&P=0&h=220',
      },
      {
        id: '2',
        name: 'iPhone 13',
        category: 'Mobile Phones',
        price: '1,200,000',
        image: 'https://tse3.mm.bing.net/th?id=OIP.2o3FJBnp6m3sbSMj-BHr1wHaJc&pid=Api&P=0&h=220',
      },
      {
        id: '1',
        name: 'Rolex Watch',
        category: 'Watches',
        price: '3,013,008',
        image: 'https://tse2.mm.bing.net/th?id=OIP.BzDXCusCi3hLir9c1CbEVQHaKT&pid=Api&P=0&h=220',
      },
      {
        id: '2',
        name: 'iPhone 13',
        category: 'Mobile Phones',
        price: '1,200,000',
        image: 'https://tse3.mm.bing.net/th?id=OIP.2o3FJBnp6m3sbSMj-BHr1wHaJc&pid=Api&P=0&h=220',
      },
  ];

  const PopularProducts: React.FC = () => {
    return (
      <section className="py-16 px-24 font-poppins bg-white">
        <div className="mb-8">
          <div className="flex items-center">
            <div className="w-24 h-2 bg-secondary mr-4"></div>
            <h2 className="text-2xl font-bold text-black">POPULAR PRODUCTS</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">      
          {dummyProducts.map((product) => (
            <div key={product.id} className="rounded-lg shadow-md">
              <img src={product.image} alt={product.name} className="w-full h-48 object-contain mb-4" />
              <p className="text-gray-500">{product.category}</p>
              <h3 className="text-xl text-secondary">{product.name}</h3>
              <div className="flex space-x-16">
                <p className="text-lg font-semibold my-2 text-gray-900">{product.price} Rwf</p>
                <button className="text-secondary fas fa-shopping-cart text-2xl"></button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default PopularProducts;