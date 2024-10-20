// components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './componentStyle/Navbar.module.css'; // Adjusted path to CSS
import logo from '../assets/SleepingPandaLogo.png'; // Import the logo image

function isUserLoggedIn() {
  const storedUserData = JSON.parse(localStorage.getItem('user'));

  // Check if user data exists and 'success' is true
  if (storedUserData && storedUserData.success === true) {
    console.log(`User ${storedUserData.email} is logged in.`);
    return true; // User is logged in
  } else {
    console.log('No user is logged in.');
    return false; // No user is logged in
  }
}

// Example usage:
if (isUserLoggedIn()) {
  // Perform actions for logged-in users (e.g., redirect to dashboard)
} else {
  // Perform actions for guests (e.g., redirect to login page)
}
const handleLogout = () => {
  const updatedUserData = { ...storedUserData, success: false };
  localStorage.setItem('user', JSON.stringify(updatedUserData)); // Update localStorage
  navigate('/'); // Redirect to homepage or login page
};

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <Link to="/home">
      <div className={styles.logoContainer}>
        
        <img src={logo} alt="Panda Logo" className={styles.logoImage} />
        <div className={styles.logo}>Do Your F'n Work</div>
      </div>
      </Link>

      <div className="authButtons">
        {isLoggedIn ? (
          <button onClick={handleLogout} className="logOutButton">Logout</button>
        ) : (
          <>
            <Link to="/login">
              <button className="loginButton">Log In</button>
            </Link>
            <Link to="/register">
              <button className="registerButton">Register</button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;