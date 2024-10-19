import React from 'react';
import styles from './pageStyle/Home.module.css'; // Import CSS module
import { Link } from 'react-router-dom';

const Home = () => {
  console.log(styles); // Check if classes are loaded correctly

  return (
    <div>
      {/* Header Section */}
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

      {/* Main Content Section */}
      <main className={styles.content}>
        <h2>Welcome to</h2>
        <h1>Do Your F'n Job!</h1>
        <p>A productivity tool to keep you focused and on track.</p>
        <p>Log in or register to start crushing your tasks!</p>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        calhacks '24 yippee
      </footer>
    </div>
  );
};

export default Home;