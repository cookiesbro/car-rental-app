import { createBrowserRouter, Outlet } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import CatalogPage from '@/pages/CatalogPage';
import CartPage from '@/pages/CartPage';
import CarPage from '@/pages/CarPage';
import App from '@/App';
import CheckoutPage from '@/pages/CheckoutPage';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage'; // Раскомментируем позже
import ProfilePage from '@/pages/ProfilePage';
import ProtectedRoute from '@/app/providers/ProtectedRoute';

// Создаем конфигурацию роутера
export const router = createBrowserRouter([
  {
    // Родительский маршрут
    path: '/',
    element: <App />, // Элемент, который будет рендериться всегда. Он станет нашим Layout.
    // Внутри него будут отображаться дочерние маршруты
    children: [
      {
        index: true, // Этот компонент будет отрендерен, когда путь совпадает с родительским ("/")
        element: <HomePage />,
      },
      {
        path: 'catalog', // путь будет /catalog
        element: <CatalogPage />,
      },
      {
        path: 'car/:carId', // :carId - это динамический параметр. Сюда можно будет подставить ID машины.
        element: <CarPage />,
      },
      {
        path: 'cart', // путь будет /cart
        element: <CartPage />,
      },
      {
        path: 'checkout',
        element: (
          <ProtectedRoute>
            <CheckoutPage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'profile',
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ],
  },
]);
