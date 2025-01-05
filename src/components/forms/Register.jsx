import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom"; 
import styles from "./Auth.module.css";
import subtractIcon from "../../assets/subtract.svg";
import arrowIcon from "../../assets/arrow.svg";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validatePassword = useCallback(() => {
    const errors = {};

    if (password.length < 8) errors.password = "Minimum 8 characters";
    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) 
      errors.password = "Must contain at least 1 capital and 1 small letter";
    if (!/[0-9]/.test(password)) errors.password = "Must contain at least 1 number";
    if (/[^a-zA-Z0-9]/.test(password)) errors.password = "Password must contain only Latin letters";
    if (password !== confirmPassword) errors.confirmPassword = "Passwords do not match";

    setErrors(errors);
  }, [password, confirmPassword]);

  useEffect(() => {
    validatePassword();
  }, [validatePassword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      localStorage.setItem("registerData", JSON.stringify({ name, email, password }));
      alert(`Registration successful:\nName: ${name}\nEmail: ${email}`);
      navigate("/products");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>REGISTER</h2>

      <div className={styles.field}>
        <label htmlFor="name">NAME</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="John Doe"
        />
      </div>

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
        {errors.password && (
          <div className={styles.error}>
            <img src={subtractIcon} alt="Error" className={styles.subicon} />
            <span>{errors.password}</span>
          </div>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="confirmPassword">CONFIRM PASSWORD</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          placeholder="********"
        />
        {errors.confirmPassword && (
          <div className={styles.error}>
            <img src={subtractIcon} alt="Error" className={styles.subicon} />
            <span>{errors.confirmPassword}</span>
          </div>
        )}
      </div>

      <button type="submit" className={styles.button}>
        <span>REGISTER</span>
        <img src={arrowIcon} alt="Arrow" className={styles.icon} />
      </button>

      <div className={styles.authLink}>
        <p>
          Already have an account?{" "}
          <a href="/" className={styles.authButton}>Sign In here</a>
        </p>
      </div>
    </form>
  );
};

export default Register;
