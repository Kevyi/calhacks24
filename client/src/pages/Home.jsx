import React from 'react';
import styles from './pageStyle/Home.module.css'; // Import CSS module
import Navbar from '../components/Navigationbar.jsx'

const Home = () => {
  console.log(styles); // Check if classes are loaded correctly

  return (
    <>
    <div>
      <Navbar />

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
    </>
  );
};

export default Home;