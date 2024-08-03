import React from "react";
import "./nosotros.css";
const LoginPage = (props) => {
  return (
    <main className="holder">
      <h2>Ingrese su usuario y contraseña</h2>

      <form action="" method="" className="formulario">
        <p>
          <input
            type="text"
            placeholder="Ingrese su usuario"
            id="login"
            name="login"
          />
        </p>
        <p>
          <input
            type="password"
            placeholder="Ingrese contraseña"
            id="pass"
            name="password"
          />
        </p>
        <p>
          <button type="submit">Enviar</button>
        </p>
      </form>
    </main>
  );
};

export default LoginPage;
