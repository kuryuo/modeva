import React from "react";
import styles from "./AddToCart.module.css";
import cartImg from "../../assets/cartw.svg";

const AddToCartButton = ({ onClick }) => {
  return (
    <button className={styles.addToCart} onClick={onClick}>
      <span className={styles.addText}>ADD TO CART</span>
      <img src={cartImg} alt="Cart" className={styles.cartIcon} />
    </button>
  );
};

export default AddToCartButton;
