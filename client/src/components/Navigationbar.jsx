// components/Navbar.jsx

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './componentStyle/Navbar.module.css'; // Adjusted path to CSS
import logo from '../assets/SleepingPandaLogo.png'; // Import the logo image

// Function to check if the user is logged in
function isUserLoggedIn() {
  const storedUserData = JSON.parse(localStorage.getItem('user'));
  if (storedUserData && storedUserData.success) {
    console.log(`User ${storedUserData.email} is logged in.`);
    return true;
  } else {
    console.log('No user is logged in.');
    return false;
  }
}

const Navbar = () => {
  const navigate = useNavigate(); // Initialize navigate function
  const isLoggedIn = isUserLoggedIn(); // Check login status

  // Logout handler
  const handleLogout = () => {
    const storedUserData = JSON.parse(localStorage.getItem('user')) || {};
    const updatedUserData = { ...storedUserData, success: false };
    localStorage.setItem('user', JSON.stringify(updatedUserData)); // Update localStorage
    navigate('/'); // Redirect to homepage or login page
  };

  return (
    <header className={styles.navbar}>
      <Link to="/home">
        <div className={styles.logoContainer}>
          <img src={logo} alt="Panda Logo" className={styles.logoImage} />
          <div className={styles.logo}>Do Your F'n Work</div>
        </div>
      </Link>

      <div className={styles.authButtons}>
        {isLoggedIn ? (
          <button onClick={handleLogout} className={styles.logOutButton}>
            Logout
          </button>
        ) : (
          <>
            <Link to="/login">
              <button className={styles.loginButton}>Log In</button>
            </Link>
            <Link to="/register">
              <button className={styles.registerButton}>Register</button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;