import React, { useState } from "react";
import styles from "./ProductSize.module.css"; 

const SizeSelector = () => {
  const sizes = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];
  const [selectedSize, setSelectedSize] = useState(null);

  return (  
    <div className={styles.sizeWrapper}>
      <div className={styles.sizeOptions}>
        {sizes.map((size) => (
          <button
            key={size}
            className={`${styles.sizeButton} ${selectedSize === size ? styles.selected : ""}`}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
