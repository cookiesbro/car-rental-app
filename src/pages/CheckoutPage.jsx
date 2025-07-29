import { useState } from 'react';
import { useForm } from '@/shared/hooks/useForm'; // 1. Импортируем наш кастомный хук
import Modal from '@/shared/ui/Modal';

const CheckoutPage = () => {
  // 2. Инициализируем хук, передавая ему объект с начальными значениями полей.
  // Наш хук возвращает объект с текущими значениями (values) и обработчиком (handleChange).
  const { values, handleChange, resetForm } = useForm({
    fullName: '',
    email: '',
    phone: '',
    comments: '',
  });

  // 3. Создаем состояние для управления видимостью модального окна
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 3. Создаем обработчик отправки формы
  const handleSubmit = (event) => {
    // Предотвращаем стандартное поведение формы (перезагрузку страницы)
    event.preventDefault();

    // В реальном приложении здесь был бы код для отправки данных на сервер.
    // А пока мы просто выведем их в консоль, чтобы убедиться, что все работает.
    console.log('Данные заказа:', values);

    setIsModalOpen(true);

    // Очищаем форму после успешной отправки
    resetForm();
  };

  return (
    <div>
      <h1>Оформление заказа</h1>

      {/* 4. Создаем тег формы и привязываем наш обработчик к событию onSubmit */}
      <form onSubmit={handleSubmit} className="form-container">
        <div>
          <label htmlFor="fullName">ФИО</label>
          <input
            type="text"
            id="fullName"
            name="fullName" // <-- Это 'name' должно совпадать с ключом в initialValues!
            className="form-input"
            value={values.fullName} // <-- Отображаем значение из состояния
            onChange={handleChange} // <-- Привязываем единый обработчик
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email" // <-- Ключ 'email'
            className="form-input"
            value={values.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="phone">Телефон</label>
          <input
            type="tel"
            id="phone"
            name="phone" // <-- Ключ 'phone'
            className="form-input"
            value={values.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="comments">Комментарии к заказу</label>
          <textarea
            id="comments"
            name="comments" // <-- Ключ 'comments'
            className="form-input"
            rows="4"
            value={values.comments}
            onChange={handleChange}
          ></textarea>
        </div>

        <button
          type="submit"
          className="form-button"
          style={{ background: '#28a745', color: 'white', cursor: 'pointer' }}
        >
          Оформить заказ
        </button>
      </form>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Заказ успешно оформлен!</h2>
        <p>Спасибо, {values.fullName || 'клиент'}!</p>
        <p>Мы скоро свяжемся с вами по email: {values.email}</p>
      </Modal>
    </div>
  );
};

export default CheckoutPage;
