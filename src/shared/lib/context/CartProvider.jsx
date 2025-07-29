import { useReducer } from 'react';
import { CartContext } from './CartContext'; 

const initialState = {
  items: [], //массив товаров в корзине
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const newRentalItem = action.payload; // payload теперь - это {car, startDate, endDate}
      return {
        ...state,
        // Добавляем в массив новый объект, который содержит payload и уникальный id
        items: [...state.items, { ...newRentalItem, id: Date.now() }],
      };
    }

    case 'REMOVE_FROM_CART': {
      const itemIdToRemove = action.payload;
      //Используем фильтр, чтобы создать новый массив,
      //в который  войдут все элементы, кроме того, у которого id совападает с переданным
      console.log('Удаляем элемент с ID:', itemIdToRemove);
      const updatedItems = state.items.filter(
        (item) => item.id !== itemIdToRemove
      );
      return {
        ...state,
        items: updatedItems,
      };
    }
    // ... другие кейсы
    default:
      throw new Error(`Неизвестный action type: ${action.type}`);
  }
}

// создаем новый компонент Провайдер - оборачивает приложение и дает доступ к контексту
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState); //
  //в value передаем то, что доступно всем "подписчикам" контекста
  const value = {
    cart: state, //текущее состояние корзины
    dispatch, // функция для отправки команд
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}