import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CartItem from '../../components/CartItem/CartItem';
import { useNavigate } from 'react-router-dom';  
import styles from './Cart.module.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Brown Leather Jacket', price: 300000, quantity: 1, image: 'https://via.placeholder.com/140' },
    { id: 2, name: 'Black Yellow Square Shirt', price: 250000, quantity: 2, image: 'https://via.placeholder.com/140' },
    { id: 3, name: 'White Men Formal Shirt', price: 200000, quantity: 1, image: 'https://via.placeholder.com/140' },
  ]);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const navigate = useNavigate(); 

  const handleCheckout = () => navigate('/checkout');
  const handleDelete = (itemToDelete) => setCartItems(cartItems.filter(item => item.id !== itemToDelete.id));

  return (
    <div className={styles.cartPage}>
      <Header />
      <div className={styles.content}>
        <h1 className={styles.title}>CART</h1>
        <div className={styles.cartContainer}>
          <div className={styles.cartItems}>
            {cartItems.length > 0 ? cartItems.map((item) => (
              <CartItem key={item.id} item={item} onDelete={handleDelete} />
            )) : <p>Корзина пуста</p>}
          </div>
          
          <div className={styles.shoppingInfo}>
            <h3 className={styles.shoppingInfoTitle}>SHOPPING INFO</h3>
            <div className={styles.total}>
              <span>Total</span>
              <span>{`IDR ${totalPrice.toLocaleString()}`}</span>
            </div>
            <button className={styles.checkoutButton} onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
