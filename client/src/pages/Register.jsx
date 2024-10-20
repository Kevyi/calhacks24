import { useState } from 'react';
import Navbar from '../components/Navigationbar'; // Reuse Navbar component
import './pageStyle/AddFriendPage.module.css'; // Import CSS

export default function AddFriendPage() {
  const [friendCode, setFriendCode] = useState(''); // State for input

  const handleInputChange = (e) => {
    setFriendCode(e.target.value); // Update the friend code state
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      // POST request to the backend
      const response = await fetch('http://localhost:8080/add-friend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ friendCode }), // Send friend code as JSON
      });

      const data = await response.json(); // Handle backend response

      if (response.ok) {
        alert('Friend added successfully!');
        console.log('Server response:', data);
        setFriendCode(''); // Clear input after success
      } else {
        alert('Failed to add friend. Please try again.');
        console.error('Error:', data);
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('There was a problem adding the friend.');
    }
  };

  return (
    <div className="home-container">
      <Navbar /> {/* Navbar at the top */}
      <div className="left-side">
        <h2>Add a Friend</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="friendCode">Enter Friend Code:</label>
            <input
              type="text"
              id="friendCode"
              name="friendCode"
              value={friendCode}
              onChange={handleInputChange}
              placeholder="panda@doyour.work"
              required
            />
          </div>
          <button type="submit">Add Friend</button>
        </form>
      </div>
      <div className="right-side">
        {/* Optional: Add an image or other visual elements */}
      </div>
    </div>
  );
}