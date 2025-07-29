import { useState, useEffect } from 'react'; // 1. Импортируем хуки
import { useParams } from 'react-router-dom';
import { useCart } from '@/shared/lib/context/useCart';
import Modal from '@/shared/ui/Modal';
import { getCarById } from '@/shared/api/carsApi'; // 2. Импортируем новую API-функцию
import CarPageSkeleton from '@/entities/CarPageSkeleton';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
//import { format } from 'date-fns';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const CarPage = () => {
  const { carId } = useParams();
  const { cart, dispatch } = useCart();

  // 3. Создаем состояния для управления данными, загрузкой и ошибкой
  const [car, setCar] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Состояния для календаря и модальных окон остаются без изменений
  const [range, setRange] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [validationError, setValidationError] = useState('');
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  // 4. Используем useEffect для загрузки данных об ОДНОМ автомобиле
  useEffect(() => {
    const fetchCar = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await getCarById(carId);
        setCar(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCar();
  }, [carId]); // Эффект будет перезапускаться, если carId изменится

  // --- Логика компонента (обработчики, расчеты) ---
  // ВАЖНО: вся эта логика должна находиться ПОСЛЕ useEffect
  // и должна учитывать, что `car` может быть `null` на старте.

  const handleAddToCart = () => {
    if (!range || !range.from || !range.to) {
      setValidationError('Пожалуйста, выберите диапазон дат аренды');
      return;
    }
    dispatch({
      type: 'ADD_TO_CART',
      payload: { car, startDate: range.from, endDate: range.to },
    });
    setIsModalOpen(true);
    setRange(undefined);
    setValidationError('');
  };

  const handleDateSelect = (selectedRange) => {
    setRange(selectedRange);
    if (validationError) {
      setValidationError('');
    }
  };

  // 5. Условный рендеринг в зависимости от состояния загрузки
  if (isLoading) {
    return <CarPageSkeleton />; // Показываем спиннер, пока данные загружаются
  }

  if (error || !car) {
    return (
      <h1 style={{ color: 'red' }}>
        Ошибка: {error || 'Автомобиль не найден'}
      </h1>
    );
  }

  // --- Логика для заблокированных дат (теперь она должна быть здесь, после проверок) ---
  const bookingsForThisCar = cart.items.filter((item) => item.car.id == carId);
  const disabledRanges = bookingsForThisCar.map((booking) => ({
    from: booking.startDate,
    to: booking.endDate,
  }));
  const disabledDates = [{ before: new Date() }, ...disabledRanges];

  let footer = <p>Пожалуйста, выберите первый день аренды.</p>;
  if (range?.from) {
    /* ... */
  }

  return (
    <div>
      <img
        src={car.imageUrl}
        alt={car.name}
        style={{ width: '100%', maxWidth: '600px', borderRadius: '8px' }}
      />
      <h1>{car.name}</h1>
      <h2>{car.price} ₽/день</h2>
      <p>Год выпуска: {car.year}</p>
      <p>{car.details}</p>

      <hr style={{ margin: '20px 0' }} />

      {/* 3. Создаем кнопку-триггер для открытия/закрытия календаря */}
      <button
        className="date-picker-toggle"
        onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
      >
        <span>Выберите даты аренды:</span>
        {/* Меняем иконку в зависимости от состояния */}
        {isDatePickerOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>

      {/* Вместо одного div, теперь у нас обертка для анимации и контейнер для контента */}
      <div className={`date-picker-wrapper ${isDatePickerOpen ? 'open' : ''}`}>
        <div className="date-picker-content">
          <DayPicker
            mode="range"
            selected={range}
            onSelect={handleDateSelect}
            footer={footer}
            numberOfMonths={2}
            disabled={disabledDates}
          />
        </div>
      </div>

      {validationError && <p className="error-message">{validationError}</p>}

      <button
        onClick={handleAddToCart}
        disabled={!range || !range.to}
        className="form-button"
        style={{ marginTop: '10px' }}
      >
        Добавить в корзину
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3>Успешно!</h3>
        <p>
          Автомобиль <strong>{car.name}</strong> добавлен в корзину.
        </p>
      </Modal>
    </div>
  );
};

export default CarPage;
