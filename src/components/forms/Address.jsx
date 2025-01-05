import React, { useState, useEffect, useCallback } from "react";
import styles from "./CheckoutForm.module.css";

const AddressForm = ({ formData, onChange }) => {
  const [errors, setErrors] = useState({});

  const validateAddress = useCallback(() => {
    const errors = {};
    if (!formData.address) errors.address = "Адрес обязателен";
    if (!formData.country) errors.country = "Страна обязательна";
    setErrors(errors);
  }, [formData]);

  useEffect(() => {
    validateAddress();
  }, [validateAddress]);

  return (
    <div className={styles.formSection}>
      <h3>ADDRESS DETAIL</h3>
      <div className={styles.inputGroup}>
        <label htmlFor="address">ADDRESS</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={onChange}
          placeholder="Eg: ABC Street 12A, West Java, Indonesia"
        />
        {errors.address && <div className={styles.error}>{errors.address}</div>}
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="country">COUNTRY</label>
        <select name="country" id="country" value={formData.country} onChange={onChange}>
          <option value="" disabled>--Choose Country--</option>
          <option value="usa">USA</option>
          <option value="uk">UK</option>
          <option value="france">France</option>
          <option value="germany">Germany</option>
          <option value="spain">Spain</option>
          <option value="italy">Italy</option>
          <option value="russia">Russia</option>
        </select>
        {errors.country && <div className={styles.error}>{errors.country}</div>}
      </div>
    </div>
  );
};

export default AddressForm;
