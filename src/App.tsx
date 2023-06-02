import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import HomePage from './pages/HomePage';
import CreateProductPage from './pages/CreateProductPage';
import ProductListPage from './pages/ProductListPage';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/createproductpage" element={<CreateProductPage />} />
          <Route path="/productlistpage" element={<ProductListPage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}