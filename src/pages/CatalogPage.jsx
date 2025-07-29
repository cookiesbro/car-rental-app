import { useState, useEffect } from 'react';
import { CarCard, CarCardSkeleton } from '@/entities/car';
import { getCars } from '@/shared/api/carsApi';

const CatalogPage = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      // Здесь мы не сбрасываем cars, чтобы не было "прыжка" контента
      setIsLoading(true);
      setError(null);
      try {
        const data = await getCars();
        setCars(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (error) {
    return <h1 style={{ color: 'red' }}>Ошибка: {error}</h1>;
  }

  return (
    <div>
      <h1>Каталог автомобилей</h1>
      <div className="catalog-container">
        {/* 2. НОВАЯ ЛОГИКА РЕНДЕРИНГА */}
        {isLoading
          ? // Если идет загрузка, рендерим 6 скелетонов
            Array.from({ length: 6 }).map((_, index) => (
              <CarCardSkeleton key={index} />
            ))
          : // Когда загрузка завершена, рендерим настоящие карточки
            cars.map((car) => <CarCard key={car.id} car={car} />)}
      </div>
    </div>
  );
};

export default CatalogPage;
