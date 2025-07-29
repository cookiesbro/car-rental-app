import { useReducer, useEffect } from 'react';
//import { login as apiLogin, register as apiRegister } from '../api/auth'; // Импортируем нашу "серверную" функцию
import { login as apiLogin, register as apiRegister } from '@/shared/api/auth'; // Импортируем нашу "серверную" функцию
import { AuthContext } from './AuthContext';
// 2. Определяем начальное состояние.
// Мы пытаемся прочитать данные пользователя и токен из localStorage.
// Если их там нет, то значения будут null.
const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  token: localStorage.getItem('token') || null,
  isLoading: false,
  error: null,
};

// 3. Создаем редьюсер для управления состоянием авторизации
function authReducer(state, action) {
  switch (action.type) {
    case 'LOGIN_START':
      return { ...state, isLoading: true, error: null };
    case 'LOGIN_SUCCES':
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,
      };
    case 'LOGIN_FAILURE':
      return { ...state, isLoading: false, error: action.payload };
    case 'LOGOUT':
      return { ...state, user: null, token: null };
    case 'CLEAR_ERROR':
      return { ...state, error: null };
    default:
      throw new Error(`Неизвестный action type: ${action.type}`);
  }
}

// 4. Создаем компонент-провайдер
export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // синхронизируем состояние с localstorage.
  // Этот хук будет выполняться каждый раз, когда меняется state.user или state.token
  useEffect(() => {
    if (state.user && state.token) {
      localStorage.setItem('user', JSON.stringify(state.user));
      localStorage.setItem('token', state.token);
    } else {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    }
  }, [state.user, state.token]);
  // 6. Создаем асинхронную функцию для входа
  const login = async (email, password) => {
    dispatch({ type: 'LOGIN_START' });
    try {
      const data = await apiLogin(email, password); //вызываем "серверную" функцию
      dispatch({ type: 'LOGIN_SUCCES', payload: data });
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE', payload: err.message });
    }
  };

  // Registration add
  const register = async (name, email, password) => {
    dispatch({ type: 'LOGIN_START' });
    try {
      const data = await apiRegister(name, email, password);
      dispatch({ type: 'LOGIN_SUCCES', payload: data });
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE', payload: err.message });
    }
  };

  //созаем функцию выхода
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  // 2. Создаем функцию для очистки ошибки
  const clearError = () => {
    dispatch({ type: 'CLEAR_ERROR' });
  };

  // передаем состояние и функции в value провайдера
  const value = {
    ...state, //user, tokn, isLoading, error
    isAuthenticated: !!state.token,
    login,
    register,
    logout,
    clearError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
