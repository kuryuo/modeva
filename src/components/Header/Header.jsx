import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";  
import styles from "./Header.module.css";
import profileImg from "../../assets/profile.svg";
import exit from "../../assets/exit.svg";
import searchImg from "../../assets/search.svg";

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate(); 

  const handleExitClick = () => {
    navigate("/"); 
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query); 
  };

  return (
    <header className={styles.header}>
      <Link to="/products" className={styles.logo}>MODEVA</Link> 
      <nav className={styles.nav}>
        <ul>
          <li><a href="/#">Catalog</a></li>
          <li><a href="/#">Sale</a></li>
          <li><a href="/#">New Arrival</a></li>
          <li><a href="/#">About</a></li>
        </ul>
      </nav>
      <div className={styles.actions}>
        <div className={styles.searchWrapper}>
          <img src={searchImg} alt="Search" className={styles.searchIcon} />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search"
            className={styles.searchInput}
          />
        </div>
        <img src={profileImg} alt="Profile" className={styles.icon} />
        <img
          src={exit}
          alt="Exit"
          className={styles.icon}
          onClick={handleExitClick}
        />
      </div>
    </header>
  );
};

export default Header;
