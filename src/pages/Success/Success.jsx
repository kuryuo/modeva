import React from "react";
import { useNavigate } from "react-router-dom"; 
import styles from "./Success.module.css";
import img from "../../assets/success.svg"; 

const Success = () => {
  const navigate = useNavigate(); 

  const handleBackToHome = () => {
    navigate("/products");
  };

  return (
    <div className={styles.successPage}>
      <div className={styles.logo}>MODEVA</div>
      <div className={styles.successContent}>
        <img src={img} alt="Success" className={styles.successImage} />
        <h1 className={styles.orderCompleted}>ORDER COMPLETED!</h1>
        <p className={styles.successMessage}>
          Lean back and relax, knowing our team is hard at work preparing and shipping your package swiftly. Feel free to browse our diverse product selection during this time – you might discover another item you'd like to add to your collection!
        </p>
        <button className={styles.backHomeButton} onClick={handleBackToHome}>BACK TO HOME</button>
      </div>
    </div>
  );
};

export default Success;
