import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCars } from '@/shared/api/carsApi';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [allCars, setAllCars] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  // Используем наш хук. Поиск будет срабатывать через 500мс после остановки ввода.
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // 1. При первом рендере загружаем ВСЕ машины и храним их локально
  useEffect(() => {
    const loadCars = async () => {
      const cars = await getCars();
      setAllCars(cars);
    };
    loadCars();
  }, []);

  // 2. Этот эффект срабатывает, когда `debouncedSearchTerm` меняется
  useEffect(() => {
    if (debouncedSearchTerm) {
      const filteredCars = allCars.filter((car) =>
        car.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      );
      setResults(filteredCars);
    } else {
      setResults([]);
    }
  }, [debouncedSearchTerm, allCars]);

  return (
    <div
      className="search-bar-container"
      onBlur={() => {
        // Даем клику немного времени, чтобы сработать, перед тем как скрыть список
        setTimeout(() => {
          setIsFocused(false);
        }, 150); // 150 мс - это небольшая, незаметная задержка
      }}
    >
      <div className="search-input-wrapper">
        <FaSearch />
        <input
          type="text"
          placeholder="Search for a car..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsFocused(true)}
        />
      </div>
      {isFocused && results.length > 0 && (
        <ul className="search-results">
          {results.map((car) => (
            <li key={car.id}>
              <Link
                to={`/car/${car.id}`}
                onClick={() => {
                  setSearchTerm('');
                  setIsFocused(false);
                }}
              >
                {car.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
