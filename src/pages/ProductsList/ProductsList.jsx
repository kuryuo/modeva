import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Category from '../../components/Category/Category';
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './ProductsList.module.css';
import image from '../../assets/product.png';

const ProductList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const products = [
    { id: 1, type: 'JACKET', title: 'Brown Leather Jacket', price: 'IDR 300.000', rating: 4.95 },
    { id: 2, type: 'SHIRT', title: 'Black Yellow Square Shirt', price: 'IDR 300.000', rating: 4.95 },
    { id: 3, type: 'SHIRT', title: 'White Men Formal Shirt', price: 'IDR 300.000', rating: 4.95 },
    { id: 4, type: 'HOODIE', title: 'Orange Hoodie', price: 'IDR 300.000', rating: 4.95 },
    { id: 5, type: 'T-SHIRT', title: 'Casual White T-Shirt', price: 'IDR 300.000', rating: 4.95 },
    { id: 6, type: 'T-SHIRT', title: 'Graphic White Tee', price: 'IDR 300.000', rating: 4.95 },
    { id: 7, type: 'COAT', title: 'Winter Coat', price: 'IDR 300.000', rating: 4.95 },
    { id: 8, type: 'SHIRT', title: 'Formal Shirt', price: 'IDR 300.000', rating: 4.95 },
    { id: 9, type: 'JACKET', title: 'Denim Jacket', price: 'IDR 300.000', rating: 4.95 },
  ];

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) 
  );

  return (
    <div className={styles.productsPage}>
      <Header onSearch={handleSearch} /> 
      <div className={styles.content}>
        <h1 className={styles.title}>ALL PRODUCTS</h1>
        <div className={styles.mainContent}>
          <Category />
          <div className={styles.grid}>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard
                  product={product}
                  key={product.id}
                  type={product.type}
                  title={product.title}
                  price={product.price}
                  rating={product.rating}
                  image={image}
                />
              ))
            ) : (
              <p>No products found</p> 
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductList;
