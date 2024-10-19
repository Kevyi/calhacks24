// pages/AddFriendPage.jsx

import React from 'react';
import Navbar from '../components/Navigationbar'; // Reuse Navbar
import styles from './pageStyle/AddFriendPage.module.css'; // Import CSS
import pandaImage from '../assets/Panda2.png'; // Import the image

const AddFriendPage = () => {
  return (
    <div className={styles.pageContainer}>
      <Navbar /> {/* Navbar at the top */}

      <main className={styles.mainContent}>
        <div className={styles.formContainer}>
          <label htmlFor="friendCode" className={styles.label}>
            Enter Friend Code:
          </label>
          <input
            type="text"
            id="friendCode"
            placeholder="panda@doyour.work"
            className={styles.textBox}
          />
            <p className={styles.descriptionBox}>
            Squad up and stay sharp! Keep your friends accountable, and they’ll do the same for you—because productivity’s more fun when you’ve got backup.
            </p>       
             </div>

        <div className={styles.imageContainer}>
          <img src={pandaImage} alt="Panda" className={styles.pandaImage} />
        </div>
      </main>

      <footer className={styles.footer}>
        calhacks '24 yippee
      </footer>
    </div>
  );
};

export default AddFriendPage;