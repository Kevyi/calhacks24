import React from 'react';
import styles from './pageStyle/Home.module.css'; // Import CSS module

const Home = () => {
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
            <a href="./login">
                <button>Log In</button>
            </a>
            <a href="./register">
                <button>Register</button>
            </a>
        </div>
      </header>

      {/* Main Content Section */}
      <main className={styles.content}>
        <h1>Welcome to Do Your F'n Job!</h1>
        <p>A productivity tool to keep you focused and on track.</p>
        <p>Log in or register to start crushing your tasks!</p>
      </main>

      {/* Footer (Optional) */}
      <footer className={styles.footer}>
        © 2024 Do Your F'n Job. All Rights Reserved.
      </footer>
    </div>
  );
};

export default Home;