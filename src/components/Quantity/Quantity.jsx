import React, { useState } from "react";
import styles from "./Quantity.module.css"; 

const Quantity = ({ initialQuantity = 1, min = 1, max = 5 }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  return (
    <div className={styles.quantityWrapper}>
      <button
        className={styles.decrementButton}
        onClick={() => quantity > min && setQuantity(quantity - 1)}
        disabled={quantity <= min}
      >
        -
      </button>
      <span className={styles.quantity}>{quantity}</span>
      <button
        className={styles.incrementButton}
        onClick={() => quantity < max && setQuantity(quantity + 1)}
        disabled={quantity >= max}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
