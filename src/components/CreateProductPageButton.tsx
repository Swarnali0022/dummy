import React from 'react';
import { Link } from 'react-router-dom';

const CreateProductPageButton: React.FC = () => {
  return (
    <div>
      <Link to="/createproductpage">
        <button className="bg-blue-500 hover:bg-blue-700 text-white text-2xl font-bold py-2 px-4 rounded">
          Create product
        </button>
      </Link>
    </div>
  );
};

export default CreateProductPageButton;