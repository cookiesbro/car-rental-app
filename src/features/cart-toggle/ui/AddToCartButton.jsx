// src/features/add-to-cart/ui/AddToCartButton.jsx

// Он тоже "глупый", просто отображает кнопку.
// - onClick: функция, которую предоставит страница CarPage
// - disabled: флаг, который делает кнопку неактивной (его тоже предоставит CarPage)
const AddToCartButton = ({ onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="form-button" // Используем наш общий стиль для кнопок
      style={{ marginTop: '20px', width: '100%' }}
    >
      Добавить в корзину
    </button>
  );
};

export default AddToCartButton;