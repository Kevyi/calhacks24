// components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './componentStyle/Navbar.module.css'; // Adjusted path to component-specific CSS

const Navbar = () => {
  return (
    <header className={styles.navbar}>
    <div className={styles.logoContainer}>
      {/* Placeholder for an image */}
      <div className={styles.logoPlaceholder}></div>
      <div className={styles.logo}>Do Your F'n Job</div>
    </div>

    {/* Auth Buttons */}
    <div className={styles.authButtons}>
      <Link to="/login">
        <button className={styles.loginButton}>Log In</button>
      </Link>
      <Link to="/register">
        <button className={styles.registerButton}>Register</button>
      </Link>
    </div>
  </header>
  );
};

export default Navbar;