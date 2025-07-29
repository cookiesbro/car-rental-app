import { useState, useEffect } from 'react';

// Хук принимает значение (которое быстро меняется) и задержку в мс
export function useDebounce(value, delay) {
  // Состояние для "отложенного" значения
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Устанавливаем таймер, который обновит отложенное значение через `delay` мс
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Это функция очистки. Она сработает, если `value` или `delay` изменятся
    // до того, как таймер сработал. Она отменит предыдущий таймер.
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Перезапускаем эффект, только если значение или задержка изменились

  return debouncedValue;
}
