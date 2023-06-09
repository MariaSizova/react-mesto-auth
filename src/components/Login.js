// import { useEffect } from "react";
import useValidation from "../hooks/useValidation.js";

function Login({ name, onLogin, onLoading }) {
  const { values, errors, onChange, resetValidation } = useValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(values);
    resetValidation();
  };

  return (
    <div className="login">
      <h2 className="login___title">Вход</h2>
      <form
        name={`${name}`}
        className="login__form"
        onSubmit={handleSubmit}
        noValidate
      >
        <input
          type="email"
          value={values.email || ""}
          onChange={onChange}
          className="login__input"
          name="email"
          id="email"
          placeholder="email@mail.com"
          autoComplete="off"
          required
        />
        <span className="error login__error">{errors.email}</span>
        <input
          type="password"
          value={values.password || ""}
          onChange={onChange}
          className="login__input"
          name="password"
          id="password"
          placeholder="••••••••••"
          autoComplete="off"
          minLength="8"
          required
        />
        <span className="error login__error">{errors.password}</span>
        <button className="login__submit-button" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
