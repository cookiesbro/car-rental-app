const RegisterForm = ({ handleSubmit, values, handleChange, isLoading, error }) => {
    return (
        <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          name="name"
          placeholder="Ваше имя"
          onChange={handleChange}
          className="form-input"
          value={values.name}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="form-input"
          value={values.email}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          onChange={handleChange}
          className="form-input"
          value={values.password}
          required
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" className="form-button" disabled={isLoading}>
          {isLoading ? 'Регистрируемся...' : 'Зарегистрироваться'}
        </button>
      </form>
    )
}

export default RegisterForm;