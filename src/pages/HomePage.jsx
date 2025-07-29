import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// 1. Импортируем нашу API-функцию для получения всех автомобилей
import { getCars } from '@/shared/api/carsApi';

const HomePage = () => {
  // 2. Создаем состояние для хранения нашего "автомобиля дня"
  const [featuredCar, setFeaturedCar] = useState(null);

  // 3. Используем useEffect для загрузки данных при монтировании компонента
  useEffect(() => {
    // Создаем асинхронную функцию для получения и выбора машины
    const loadRandomCar = async () => {
      try {
        // Получаем массив всех машин
        const allCars = await getCars();
        
        // Убеждаемся, что машины загрузились и массив не пустой
        if (allCars && allCars.length > 0) {
          // Вычисляем случайный индекс
          const randomIndex = Math.floor(Math.random() * allCars.length);
          // Устанавливаем случайно выбранную машину в наше состояние
          setFeaturedCar(allCars[randomIndex]);
        }
      } catch (error) {
        console.error("Failed to load cars for homepage:", error);
        // В случае ошибки можно установить какой-то автомобиль по умолчанию
      }
    };

    loadRandomCar();
  }, []); // Пустой массив зависимостей означает, что эффект выполнится только один раз

  // 4. Пока данные не загрузились, показываем заглушку (скелетон)
  // Это предотвратит ошибку, если компонент попытается отрисовать `featuredCar.name`, когда `featuredCar` еще `null`
  if (!featuredCar) {
    // Можно создать более красивый скелетон, но для логики этого достаточно
    return <div>Loading featured car...</div>;
  }

  // 5. Когда данные загружены, рендерим основной контент
  return (
    <div className="home-page">
      <section className="hero-section">

        {/* Левая колонка с динамическими данными */}
        <div className="hero-left">
          {/* Отображаем название и цену из нашего состояния */}
          <h3>{featuredCar.name}</h3>
          <p style={{fontSize: '36px', fontWeight: 'bold'}}>
            {/* Форматируем цену для красивого вида и добавляем единицы */}
            ₽{featuredCar.price.toLocaleString()} / день
          </p>
          
          {/* Отображаем картинку из нашего состояния */}
          <img 
            src={featuredCar.imageUrl} 
            alt={featuredCar.name} // Используем имя машины для alt-текста
            className="car-image"
          />
        </div>

        {/* Правая колонка остается без изменений */}
        <div className="hero-right">
          <p>Statement That Few Vehicles can Match!</p>
          <h1>Rent Car In Worldwide</h1>
          <p className="subtitle">Just fast and elegant Style</p>
          
          <div className="hero-actions">
            <Link to="/catalog" className="btn btn-primary">Explore Now</Link>
            <button className="btn btn-secondary">Watch Video</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;