import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import ProductSize from "../../components/ProductSize/ProductSize";
import AddToCartButton from "../../components/AddToCart/AddToCart";
import Quantity from "../../components/Quantity/Quantity";
import styles from "./ProductDetail.module.css"; 
import star from "../../assets/star.svg";
import placeholderImage from "../../assets/product2.png";

const ProductDetails = () => {
  const navigate = useNavigate(); 

  const product = {
    id: 1,
    type: "JACKET",
    title: "Brown Leather Jacket",
    price: "IDR 300.000",
    rating: 4.95,
    description: "Stylish and durable leather jacket for any occasion.",
    image: placeholderImage,
  };

  const handleAddToCart = () => {
    console.log("Товар добавлен в корзину:", product.title);
    navigate("/cart"); 
  };

  return (
    <div className={styles.productDetailsPage}>
      <Header />
      <div className={styles.productDetailsContent}>
        <div className={styles.productImageWrapper}>
          <img 
            src={product.image} 
            alt={product.title} 
            className={styles.productImage} 
          />
        </div>
        <div className={styles.productInfo}>
          <div className={styles.typeAndRating}>
            <span className={styles.type}>{product.type}</span>
            <span className={styles.rating}>
              <img src={star} alt="star" /> {product.rating}
            </span>
          </div>
          <h2 className={styles.title}>{product.title}</h2>
          <p className={styles.price}>{product.price}</p>
          <p className={styles.description}>{product.description}</p>
          <ProductSize />
          <div className={styles.addToCartSection}>
            <div className={styles.quantity}>
              <Quantity />
            </div>
            <AddToCartButton onClick={handleAddToCart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
