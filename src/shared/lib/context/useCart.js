import { useContext } from 'react';
import { CartContext } from './CartContext'; // Импортируем из нового файла

// 5. Создаем кастомный хук для удобного использования контекста.
// Вместо того чтобы в каждом компоненте писать useContext(CartContext),
// мы будем просто вызывать useCart(). Это лучшая практика.
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart должен использоваться внутри CartProvider');
  }
  return context;
}
