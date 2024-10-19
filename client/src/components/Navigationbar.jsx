// components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './componentStyle/Navbar.module.css'; // Ensure correct path to CSS
import logo from '../assets/SleepingPandaLogo.png';

const Navbar = () => {
  return (
    <>
    <header className={styles.navbar}>
      <div className={styles.logoContainer}>
        <div className={styles.logoImage}>
          <img src={logo} alt="Logo" className={styles.logo}/>
        </div>
        <div className={styles.logo}>Do Your F'n Job</div>
      </div>

      <div className={styles.authButtons}>
        <Link to="/login">
          <button className={`${styles.authButtons} ${styles.loginButton}`}>Log In</button>
        </Link>
        <Link to="/register">
          <button className={`${styles.authButtons} ${styles.registerButton}`}>Register</button>
        </Link>
      </div>
    </header>
    </>
  );
};

export default Navbar;