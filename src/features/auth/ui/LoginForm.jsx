// Этот компонент ничего не знает о useAuth или useNavigate.
// Он просто получает все необходимое через props.
const LoginForm = ({ handleSubmit, values, handleChange, isLoading, error }) => {
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="form-input"
        value={values.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Пароль"
        className="form-input"
        value={values.password}
        onChange={handleChange}
        required
      />
      
      {error && <p className="error-message">{error}</p>}
      
      <button type="submit" className="form-button" disabled={isLoading}>
        {isLoading ? 'Входим...' : 'Войти'}
      </button>
    </form>
  );
};

export default LoginForm;