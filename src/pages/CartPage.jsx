// src/pages/CartPage.jsx

import { useState } from 'react'; // Убедись, что useState импортирован
import { Link } from 'react-router-dom';
import { useCart } from '@/shared/lib/context/useCart';
import { differenceInCalendarDays, format } from 'date-fns';
import Modal from '@/shared/ui/Modal'; // Импортируем наш Modal

const CartPage = () => {
  const { cart, dispatch } = useCart();

  // 1. Создаем состояние для управления модальным окном подтверждения
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  // 2. Создаем состояние для хранения ID элемента, который мы собираемся удалить
  const [itemToRemove, setItemToRemove] = useState(null);

  const calculateDays = (start, end) => {
    return differenceInCalendarDays(new Date(end), new Date(start)) + 1;
  };

  // 3. Эта функция теперь не удаляет, а ИНИЦИИРУЕТ удаление
  const handleRemoveClick = (item) => {
    setItemToRemove(item); // Сохраняем весь объект item для информации
    setIsConfirmModalOpen(true); // Открываем модальное окно
  };

  // 4. Эта функция будет вызвана при подтверждении удаления из модального окна
  const confirmRemove = () => {
    if (itemToRemove) {
      dispatch({ type: 'REMOVE_FROM_CART', payload: itemToRemove.id });
    }
    // Закрываем окно и сбрасываем состояние
    setIsConfirmModalOpen(false);
    setItemToRemove(null);
  };

  // 5. Функция для отмены и закрытия окна
  const closeConfirmModal = () => {
    setIsConfirmModalOpen(false);
    setItemToRemove(null);
  };

  const totalCost = cart.items.reduce((total, item) => {
    const days = calculateDays(item.startDate, item.endDate);
    return total + days * item.car.price;
  }, 0);

  if (cart.items.length === 0) {
    return <h1>Ваша корзина пуста</h1>;
  }

  return (
    <div>
      <h1>Ваша корзина</h1>
      <div>
        {cart.items.map((item) => {
          const days = calculateDays(item.startDate, item.endDate);
          const itemCost = days * item.car.price;

          return (
            <div key={item.id} className="cart-item">
              <div>
                <strong>{item.car.name}</strong>
                <p>
                  Даты аренды: {format(item.startDate, 'dd.MM.yyyy')} -{' '}
                  {format(item.endDate, 'dd.MM.yyyy')}
                </p>
                <p>Количество дней: {days}</p>
                <p>Стоимость: {itemCost.toLocaleString()} ₽</p>
              </div>
              {/* 6. Кнопка теперь вызывает handleRemoveClick */}
              <button
                onClick={() => handleRemoveClick(item)}
                className="cart-item-delete-button"
              >
                Удалить
              </button>
            </div>
          );
        })}
      </div>
      <h2 style={{ marginTop: '20px' }}>
        Итоговая стоимость: {totalCost.toLocaleString()} ₽
      </h2>
      <div style={{ marginTop: '30px', textAlign: 'right' }}>
        <Link to="/checkout" className="cart-checkout-button">
          Перейти к оформлению
        </Link>
      </div>

      {/* 7. Наше модальное окно для подтверждения */}
      <Modal isOpen={isConfirmModalOpen} onClose={closeConfirmModal}>
        <h3>Подтвердите действие</h3>
        <p>
          Вы уверены, что хотите удалить аренду автомобиля{' '}
          <strong>{itemToRemove?.car.name}</strong>?
        </p>
        <div className="cart-modal-confirm-container">
          <button onClick={closeConfirmModal} style={{ padding: '8px 16px' }}>
            Отмена
          </button>
          <button
            onClick={confirmRemove}
            className="cart-modal-confirm-container-button-delete"
          >
            Да, удалить
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default CartPage;
