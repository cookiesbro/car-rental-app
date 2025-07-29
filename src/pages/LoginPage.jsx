import { useEffect } from 'react';
import { useForm } from '@/shared/hooks/useForm';
import { useAuth } from '@/shared/lib/context/useAuth';
import { useNavigate, Link } from 'react-router-dom';
import { LoginForm } from '@/features/auth';

const LoginPage = () => {
  // 1. Получаем все необходимое из нашего AuthContext
  const { login, isAuthenticated, isLoading, error, clearError } = useAuth();

  // 2. Используем наш кастомный хук для управления формой
  const { values, handleChange } = useForm({
    email: 'test@test.com',
    password: 'password123',
  });

  // 3. Получаем функцию для навигации из React Router
  const navigate = useNavigate();
  // 4. Эффект для перенаправления, если пользователь уже аутентифицирован
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/'); // Перенаправляем на главную, если пользователь уже в системе
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    login(values.email, values.password); // Вызываем функцию login из контекста
  };

  const handleInputChange = (event) => {
    // Сначала вызываем стандартный handleChange из нашего хука useForm,
    // чтобы обновить состояние полей ввода.
    handleChange(event);
    // Затем, если на экране есть сообщение об ошибке, мы его убираем.
    if (error) {
      clearError();
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto' }}>
      <h1>Вход в аккаунт</h1>
      <LoginForm
        handleSubmit={handleSubmit}
        values={values}
        handleChange={handleInputChange}
        isLoading={isLoading}
        error={error}
      />
      <p style={{ marginTop: '20px' }}>
        Еще нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
      </p>
    </div>
  );
};

export default LoginPage;
