// src/features/cart-toggle/ui/CartToggleButton.jsx

import { FaShoppingCart } from 'react-icons/fa';

// Компонент принимает два props:
// - onClick: функция, которая будет вызвана при клике (ее предоставит App.jsx)
// - itemsCount: число товаров для отображения в "бейдже" (его предоставит Header)
const CartToggleButton = ({ onClick, itemsCount }) => {
  return (
    // При клике вызываем переданную функцию
    <button onClick={onClick} className="cart-btn">
      <FaShoppingCart />
      {/* 
        Счетчик (бейдж) отображается только в том случае, 
        если количество товаров больше нуля 
      */}
      {itemsCount > 0 && (
        <span className="cart-count">{itemsCount}</span>
      )}
    </button>
  );
};

export default CartToggleButton;