import React, { useState } from "react";
import { hashSync } from "bcryptjs";
import styles from "../pages/styles/Login.module.css";
import Navbar from "./NavBar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 /**
  * La función actualiza el estado del correo electrónico según el valor de un campo de entrada.
  * @param e - El parámetro "e" es un objeto de evento que se pasa como argumento a la función.
  * Representa el evento que activó la función, en este caso, un evento de cambio en un campo de
  * entrada. El objeto de evento contiene información sobre el evento, como el elemento de destino (en
  * este caso, el
  */
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  /**
   * La función actualiza el estado de la contraseña según el valor de un campo de entrada.
   * @param e - El parámetro "e" es un objeto de evento que se pasa como argumento a la función
   * "handlePasswordChange". Representa el evento que activó la función, en este caso, un evento de
   * cambio en un campo de entrada. El objeto de evento contiene información sobre el evento, como el
   * elemento de destino (en
   */
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  /**
   * La función maneja el envío de formularios, procesa la entrada de contraseña y registra la
   * contraseña cifrada.
   * @param e - El parámetro "e" es un objeto de evento que se pasa a la función handleSubmit cuando se
   * envía el formulario. Contiene información sobre el evento, como el elemento de destino (en este
   * caso, el formulario que se envió) y cualquier dato que se ingresó en los campos del formulario. La
   * función usa esto
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit form");
    const password = e.target.elements.password.value;
    const hashedPassword = hashSync(password, 10);
    console.log("Contraseña encriptada:", hashedPassword);
    // Lógica para procesar la autenticación del usuario
  };

  return (
    <><Navbar />
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.login}>Login</div>
          <div className={styles.eula}>
            By logging in you agree to the ridiculously long terms that you didn't bother to read
          </div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              className={styles.inputField}
              value={email}
              onChange={handleEmailChange} />
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              className={styles.inputField}
              value={password}
              onChange={handlePasswordChange} />
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div></>
  );
};

export default Login;
