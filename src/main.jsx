import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './shared/config/router/index.jsx'; // Импортируем наш роутер
import { CartProvider } from '@/shared/lib/context/CartProvider.jsx'; // импортируем провайдер
import { AuthProvider } from '@/shared/lib/context/AuthProvider.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);
