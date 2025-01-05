import React, { useState } from 'react';
import styles from './Category.module.css';
import { ReactComponent as DropdownIcon } from '../../assets/dropdown.svg';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className={styles.dropdown}>
      <button className={styles.dropdownButton} onClick={() => setIsOpen((prev) => !prev)}>
        CATEGORY <DropdownIcon className={`${styles.icon} ${isOpen ? styles.rotate : ''}`} />
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {['Woman', 'Man', 'Unisex'].map((category) => (
            <li key={category}>
              <button
                className={styles.categoryButton}
                onClick={() => setActiveCategory((prev) => (prev === category ? null : category))}
              >
                {category} 
                <DropdownIcon className={`${styles.icon} ${activeCategory === category ? styles.rotate : ''}`} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
