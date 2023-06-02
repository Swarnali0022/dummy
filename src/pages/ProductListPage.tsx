import React, { useState, useEffect } from "react";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import TableContainer from "../components/TableContainer";
import { getRequest, ApiResponse } from "../services/apiService";
import { CellProps } from 'react-table';
import { HiOutlineChevronLeft } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';

interface Product {
  name: string;
  price: number;
  category: string;
  images: FileList;
  richTextContent: string;
  imagesBase64?: string[];
}

const ProductListPage= () => {
  const navigate = useNavigate();
  const columns = [
    { Header: "Name", accessor: "title" },
    { Header: "Price", accessor: "price" },
    { Header: "Category", accessor: "category" },
    {
      Header: 'Images',
      accessor: 'imagesBase64',
      Cell: ({ value }: CellProps<Product>) => {
        console.log("first", value)
        return value && value.length > 0 ? (
          <div className="flex">
            {value.map((base64: string, index: number) => (
              <img
                key={index}
                src={base64}
                alt={`Product Image ${index + 1}`}
                className="h-28 w-32 object-cover mr-2" // Set the desired height and width classes here
              />
            ))}
          </div>
        ) : (
          <div>No images</div>
        );
      },
    },
    {
      Header: 'Description',
      accessor: 'richTextContent',
      Cell: ({ value }: CellProps<Product>) => {
        // Remove the paragraph tag from the description
        const description = value.replace(/<\/?p>/g, '');
        return <div>{description}</div>;
      },
    },
    {
      Header: "Actions",
      accessor: "id",
      Cell: ({ value }: CellProps<Product>) => {
        return (
          <div>
            <button
              className="mr-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
             // onClick={() => handleEdit(value)}
            >
              Edit
            </button>
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              //onClick={() => handlePublish(value)}
            >
              Publish
            </button>
          </div>
        );
      },
    },
    
  ];


  const fetchProducts = async (): Promise<Product[]> => {
    try {
      const List: ApiResponse<Product[]> = await getRequest<Product[]>(
        "/products"
      );
      console.log("API response:", List);
      return (List as unknown) as Product[]; // Type assertion to convert ApiResponse<Product[]> to Product[]
    } catch (error) {
      console.error("Failed to fetch products:", error);
      throw new Error("Failed to fetch products");
    }
  };

  const queryClient = new QueryClient();

  const fetchProductsQuery = useQuery<Product[], Error>(
    "products",
    fetchProducts
  );

  const { data: products, isLoading, isError, error } = fetchProductsQuery;

  useEffect(() => {
    if (products) {
      console.log("Products:", products);
      // Perform any other operations with the products data
    }
  }, [products]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
<div className="flex items-center">
<button className="text-blue-500" onClick={() => navigate(-1)}>
  <HiOutlineChevronLeft className="w-9 h-6" />
</button>
  <h1 className="flex-grow text-4xl text-blue-800 text-center">Product List</h1>
</div>
      {products && products.length > 0 ? (
        <TableContainer columns={columns} data={products} />
      ) : (
        <div>No products found</div>
      )}
    </div>
  );
};

export default ProductListPage;
