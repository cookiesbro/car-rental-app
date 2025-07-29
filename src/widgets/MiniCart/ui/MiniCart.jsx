import { Link } from 'react-router-dom';
import { useCart } from '@/shared/lib/context/useCart';

// Компонент принимает `isOpen` и `onClose` для управления видимостью
const MiniCart = ({ isOpen, onClose }) => {
  const { cart } = useCart();

  // Если корзина пуста или компонент не должен быть открыт, ничего не рендерим
  if (!isOpen || cart.items.length === 0) {
    return null;
  }

  const totalCost = cart.items.reduce((total, item) => {
    // Простая логика подсчета, без учета дней для краткости,
    // или можно скопировать логику с датами из CartPage
    return total + item.car.price; // Упрощенный расчет для примера
  }, 0);

  return (
    // При клике на фон вызываем onClose, чтобы закрыть корзину
    <div className="mini-cart-backdrop" onClick={onClose}>
      {/* e.stopPropagation() не дает клику "провалиться" дальше и закрыть окно */}
      <div className="mini-cart" onClick={(e) => e.stopPropagation()}>
        <h3>Ваша корзина</h3>
        <ul className="mini-cart-list">
          {cart.items.map((item) => (
            <li key={item.id}>
              <span>{item.car.name}</span>
              <span>{item.car.price.toLocaleString()} ₽</span>
            </li>
          ))}
        </ul>
        <hr />
        <div className="mini-cart-total">
          <strong>Итого (упрощенно):</strong>
          <span>{totalCost.toLocaleString()} ₽</span>
        </div>
        <Link to="/cart" className="form-button" onClick={onClose}>
          Перейти в корзину
        </Link>
      </div>
    </div>
  );
};

export default MiniCart;
