// components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './componentStyle/Navbar.module.css'; // Adjusted path to CSS
import logo from '../assets/SleepingPandaLogo.png'; // Import the logo image

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.logoContainer}>
        {/* Actual image instead of placeholder */}
        <img src={logo} alt="Panda Logo" className={styles.logoImage} />
        <div className={styles.logo}>Do Your F'n Job</div>
      </div>

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