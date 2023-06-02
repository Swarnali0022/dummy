import React from 'react';
import CreateProductPageButton from '../components/CreateProductPageButton';
import ProductListButton from '../components/ProductListButton';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">Welcome to Shop portal</h1>
      <div className="flex gap-4 pt-4 pr-4">
        <CreateProductPageButton />
        <ProductListButton />
      </div>
    </div>
  );
};

export default HomePage;