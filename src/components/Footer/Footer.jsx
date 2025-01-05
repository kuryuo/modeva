import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.column1}>
          <div className={styles.logo}>MODEVA</div>
          <div className={styles.contacts}>
          <div className={styles.contactLeft}>
            <div className={styles.contact}>WhatsApp</div>
            <div className={styles.contact}>Email</div>
            <div className={styles.contact}>Address</div>
          </div>
          <div className={styles.contactRight}>
            <div className={styles.contact}>:+62 859 9999 999</div>
            <div className={styles.contact}>:hello@modeva.com</div>
            <div className={styles.contact}>
              :Lorem ipsum street Block B Number 08, Jakarta, Indonesia, 12345
            </div>
          </div>
          </div>
        </div>
        <div className={styles.column2}>
          <h4 className={styles.heading}>Menu</h4>
          <ul>
            <li>Sale</li>
            <li>New Arrivals</li>
            <li>Formal Men</li>
            <li>Formal Woman</li>
            <li>Casual Men</li>
            <li>Casual Woman</li>
          </ul>
        </div>
        <div className={styles.column3}>
          <h4 className={styles.heading}>Get Help</h4>
          <ul>
            <li>FAQ</li>
            <li>Customer Service</li>
            <li>Refund and Return</li>
            <li>Terms and Conditions</li>
            <li>Shipping</li>
          </ul>
        </div>
        <div className={styles.column4}>
          <h4 className={styles.heading}>Account</h4>
          <ul>
            <li>My Account</li>
            <li>My Orders</li>
            <li>Vouchers and Discounts</li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>All rights reserved</p>
        <p>Copyright 2023 By Modeva Fashion</p>
      </div>
    </footer>
  );
};

export default Footer;
