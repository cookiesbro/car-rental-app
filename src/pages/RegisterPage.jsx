// src/pages/RegisterPage.jsx
import { useEffect } from 'react';
import { useForm } from '@/shared/hooks/useForm';
import { useAuth } from '@/shared/lib/context/useAuth';
import { useNavigate, Link } from 'react-router-dom';

const RegisterPage = () => {
  const { register, isAuthenticated, isLoading, error } = useAuth();
  const { values, handleChange } = useForm({
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    register(values.name, values.email, values.password);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto' }}>
      <h1>Регистрация</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          name="name"
          placeholder="Ваше имя"
          onChange={handleChange}
          className="form-input"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="form-input"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          onChange={handleChange}
          className="form-input"
          required
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" className="form-button" disabled={isLoading}>
          {isLoading ? 'Регистрируемся...' : 'Зарегистрироваться'}
        </button>
      </form>
      <p>
        Уже есть аккаунт? <Link to="/login">Войти</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
