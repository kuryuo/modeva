import React from "react";
import styles from "./CartItem.module.css";
import Quantity from "../Quantity/Quantity";
import img from "../../assets/cartimg.png";

const CartItem = ({ item, onDelete }) => {
  const { name, price, quantity } = item;

  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemImage}>
        <img src={img} alt={name} className={styles.image} />
      </div>
      <div className={styles.cartItemDetails}>
        <h3 className={styles.productName}>{name}</h3>
        <p className={styles.productPrice}>${price}</p>
        <div className={styles.quantityWrapper}>
          <Quantity initialQuantity={quantity} min={1} max={10} />
        </div>
      </div>
      <button className={styles.deleteButton} onClick={() => onDelete(item)}>
        Delete
      </button>
    </div>
  );
};

export default CartItem;
