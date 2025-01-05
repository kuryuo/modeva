import React from "react";
import styles from "./ProductCard.module.css";
import starImg from "../../assets/star.svg"; 
import { Link } from "react-router-dom";

const ProductCard = ({ image, type, title, price, rating, product }) => {
  return (
    <div className={styles.card}>
      <Link to={{ pathname: '/product', state: { product } }}>
        <div className={styles.imageWrapper}>
          <img src={image} alt={title} className={styles.productImage} />
          <div className={styles.rating}>
            <img src={starImg} alt="star" className={styles.starIcon} />
            <span className={styles.ratingText}>{rating}</span>
          </div>
        </div>
      </Link>
      <div className={styles.info}>
        <p className={styles.type}>{type}</p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price}>{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
