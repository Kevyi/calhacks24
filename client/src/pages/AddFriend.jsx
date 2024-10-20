// pages/AddFriendPage.jsx

import { useState } from 'react';
import Navbar from '../components/Navigationbar'; // Correct Navbar import
import pandaImage from '../assets/Panda1.png'; // Import the image
import styles from './pageStyle/AddFriendPage.module.css'; // Import CSS module

export default function AddFriendPage() {

  //Gets user's email.
  const storedUserData = JSON.parse(localStorage.getItem('user'))
  const userEmail = storedUserData.email;

  const [friendCode, setFriendCode] = useState(''); // Manage input state

  const handleInputChange = (e) => {
    setFriendCode(e.target.value); // Update friend code state
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      const response = await fetch('http://localhost:8080/add-friend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userEmail, friendCode }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Friend added successfully!');
        setFriendCode(''); // Clear input after success
      } else {
        alert('Failed to add friend.');
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('There was a problem adding the friend.');
    }
  };

  return (
    <div className={styles.pageContainer}>
      <Navbar /> {/* Navbar at the top */}

      <main className={styles.mainContent}>
        <div className={styles.formContainer}>
          <h2>Add a Friend</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="friendCode" className={styles.label}>
              Enter Friend Code:
            </label>
            <input
              type="text"
              id="friendCode"
              value={friendCode}
              onChange={handleInputChange}
              placeholder="panda@doyour.work"
              className={styles.textBox}
              required
            />
            <button type="submit" className={styles.submitButton}>
              Add Friend
            </button>
          </form>
          <p className={styles.descriptionBox}>
            Squad up and stay sharp! Keep your friends accountable, and they’ll do the same for you—because productivity’s more fun with backup.
          </p>
        </div>

        <div className={styles.imageContainer}>
          <img src={pandaImage} alt="Panda" className={styles.pandaImage} />
        </div>
      </main>

      <footer className={styles.footer}>calhacks '24 yippee</footer>
    </div>
  );
}