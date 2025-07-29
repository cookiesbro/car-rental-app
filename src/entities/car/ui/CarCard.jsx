import { Link } from 'react-router-dom';
// деструктуризация props, чтобы сразу получить объект car
const CarCard = ({ car }) => {

  return (
    <Link to={`/car/${car.id}`} className="car-card">
      <img src={car.imageUrl} alt={car.name} className="car-card-image" />
      <h3>{car.name}</h3>
      <p>Год: {car.year}</p>
      <p>Цена: от {car.price} ₽/день</p>
      <div className="car-card-button">Подробнее</div>
    </Link>
  );
};

export default CarCard;
