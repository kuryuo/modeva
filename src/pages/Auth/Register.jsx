import React from "react";
import RegisterForm from "../../components/forms/Register";
import styles from "./Auth.module.css";
import authImage from "../../assets/image.png";

const LoginPage = () => {
  return (
    <div className={styles.authPage}>
      <div className={styles.imageSection}>
        <div className={styles.imageWrapper}>
          <img src={authImage} alt="img" className={styles.img} />
          <div className={styles.logo}>MODEVA</div>
        </div>
      </div>
      <div className={styles.formSection}>
        <RegisterForm />
      </div>
    </div>
  );
};

export default LoginPage;
