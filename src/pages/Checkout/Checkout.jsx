import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Contact from "../../components/forms/Contact";
import Address from "../../components/forms/Address";
import styles from "./Checkout.module.css";
import imageUrl from "../../assets/cartimg.png";

const Checkout = () => {
  const navigate = useNavigate();

  const orderSummary = [
    { id: 1, name: "Brown Leather Jacket", price: 300000, imageUrl },
    { id: 2, name: "Casual White T-Shirt", price: 150000, imageUrl },
  ];

  const totalAmount = orderSummary.reduce((total, item) => total + item.price, 0);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    country: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("checkoutData", JSON.stringify(formData));

    alert(`Form submitted with data:\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nAddress: ${formData.address}\nCountry: ${formData.country}`);

    navigate("/success");
  };

  return (
    <div className={styles.checkoutPage}>
      <div className={styles.logo}>MODEVA</div>
      <div className={styles.checkoutContainer}>
        <div className={styles.leftColumn}>
          <h2 className={styles.formTitle}>CHECKOUT FORM</h2>
          <form onSubmit={handleSubmit}>
            <Contact formData={formData} onChange={handleInputChange} />
            <Address formData={formData} onChange={handleInputChange} />
            <button className={styles.Button} type="submit">
              CONTINUE TO SHIPPING
            </button>
          </form>
        </div>
        <div className={styles.rightColumn}>
          <h3 className={styles.orderSummaryTitle}>ORDER SUMMARY</h3>
          {orderSummary.map((item) => (
            <div className={styles.checkoutItem} key={item.id}>
              <div className={styles.checkoutItemImage}>
                <img
                  src={item.imageUrl || imageUrl}
                  alt={item.name}
                  className={styles.image}
                />
              </div>
              <div className={styles.checkoutItemDetails}>
                <h3 className={styles.productName}>{item.name}</h3>
                <p className={styles.productPrice}>
                  IDR {item.price.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
          <div className={styles.total}>
            <span>Total</span>
            <span>IDR {totalAmount.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
