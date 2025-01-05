import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Auth.module.css";
import arrowIcon from "../../assets/arrow.svg"; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("loginData", JSON.stringify({ email, password }));
    alert(`Login successful:\nEmail: ${email}\nPassword: ${password}`);
    navigate("/products");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>SIGN IN</h2>
      <div className={styles.field}>
        <label htmlFor="email">EMAIL</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="example@mail.com"
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="password">PASSWORD</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="********"
        />
      </div>
      <button type="submit" className={styles.button}>
        <span>SIGN IN</span>
        <img src={arrowIcon} alt="Arrow" className={styles.icon} />
      </button>

      <div className={styles.authLink}>
        <p>
          Don’t have an account?{" "}
          <a href="/register" className={styles.authButton}>Register here</a>
        </p>
      </div>
    </form>
  );
};

export default Login;
