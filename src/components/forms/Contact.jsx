import React, { useState, useEffect, useCallback } from "react";
import styles from "./CheckoutForm.module.css";

const ContactForm = ({ formData, onChange }) => {
  const [errors, setErrors] = useState({});

  const validateContact = useCallback(() => {
    const errors = {};

    if (!formData.name) errors.name = "Имя обязательно";
    if (!formData.phone) {
      errors.phone = "Номер телефона обязателен";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Номер телефона должен содержать 10 цифр";
    }
    if (!formData.email) {
      errors.email = "Email обязателен";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Неверный формат email";
    }

    setErrors(errors);
  }, [formData]);

  useEffect(() => {
    validateContact();
  }, [validateContact]);

  return (
    <div className={styles.formSection}>
      <h3>CONTACT PERSON</h3>
      <div className={styles.inputGroup}>
        <label htmlFor="name">NAME</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={onChange}
          placeholder="Your Name"
        />
        {errors.name && <div className={styles.error}>{errors.name}</div>}
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="phone">PHONE</label>
        <div className={styles.phoneInput}>
          <select
            name="countryCode"
            id="countryCode"
            value={formData.countryCode}
            onChange={onChange}
          >
            <option value="+1">+1</option>
            <option value="+44">+44</option>
            <option value="+33">+33</option>
            <option value="+49">+49</option>
            <option value="+34">+34</option>
            <option value="+39">+39</option>
            <option value="+7">+7</option>
          </select>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={onChange}
            placeholder="Your Phone Number"
          />
          {errors.phone && <div className={styles.error}>{errors.phone}</div>}
        </div>
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="email">EMAIL</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={onChange}
          placeholder="Your Email"
        />
        {errors.email && <div className={styles.error}>{errors.email}</div>}
      </div>
    </div>
  );
};

export default ContactForm;
