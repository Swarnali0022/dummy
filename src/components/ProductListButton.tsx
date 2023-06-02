import React from 'react';
import { Link } from 'react-router-dom';

const ProductListButton: React.FC = () => {
  return (
    <div>
      <Link to="/productlistpage">
        <button className="bg-blue-500 hover:bg-blue-700 text-white text-2xl font-bold py-2 px-4 rounded">
          Product List
        </button>
      </Link>
    </div>
  );
};

export default ProductListButton;