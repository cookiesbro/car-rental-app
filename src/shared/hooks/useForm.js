import { useState } from 'react';

export function useForm(initialValues) {
  // 1. Создаем состояние для хранения значений всех полей формы.
  // Это будет объект, например: { name: '', email: '', phone: '' }
  const [values, setValues] = useState(initialValues);

  // 2. Создаем ЕДИНСТВЕННУЮ функцию для обработки изменений ЛЮБОГО поля.
  const handleChange = (event) => {
    // Извлекаем `name` и `value` из элемента, который вызвал событие.
    // Например, для <input name="fullName" />, `name` будет "fullName".
    const { name, value } = event.target;

    // 3. Обновляем наше состояние.
    // Мы используем синтаксис с функцией, чтобы гарантированно
    // работать с самым последним состоянием.
    setValues((prevValues) => ({
      // Сначала мы копируем все старые значения...
      ...prevValues,
      // ...а затем перезаписываем ТОЛЬКО то поле, которое изменилось.
      // `[name]` — это вычисляемое свойство объекта. Если `name` равно "fullName",
      // то это будет эквивалентно { fullName: value }.
      [name]: value,
    }));
  };

  // Добавим также функцию для сброса формы к начальным значениям
  const resetForm = () => {
    setValues(initialValues);
  };
  // 4. Наш хук возвращает объект с текущими значениями и функцией-обработчиком.
  // Компонент, который будет использовать этот хук, получит к ним доступ.
  return {
    values,
    handleChange,
    resetForm,
  };
}
