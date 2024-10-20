import React, { useState } from 'react';
import styles from './componentStyle/AddTaskButton.module.css';

export default function AddTaskButton({ friends, addTask, balance }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [newTask, setNewTask] = useState({
    description: '',
    friend: friends[0],
    amount: 0,
    timeLeft: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleAmountClick = (amount) => {
    setNewTask({ ...newTask, amount });
    setSelectedAmount(amount);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.amount > balance) {
      alert('Insufficient balance to add this task.');
      return;
    }
    addTask(newTask);
    setIsOpen(false);
  };

  return (
    <div className={styles["add-task-button"]}>
      <button className={`${styles["circle-button"]} ${isOpen ? styles["open"] : ""}`} onClick={() => setIsOpen(!isOpen)}>
        +
      </button>
      {isOpen && (
        <div className={styles["overlay"]}>
          <div className={styles["form-container"]}>
            <button className={styles["close-button"]} onClick={() => setIsOpen(false)}>X</button>
            <form onSubmit={handleSubmit}>
              <div className={styles["form-group"]}>
                <label>Description</label>
                <input type="text" name="description" placeholder="Description" value={newTask.description} onChange={handleChange} required />
              </div>
              <div className={styles["form-group"]}>
                <label>Friend</label>
                <select name="friend" value={newTask.friend} onChange={handleChange}>
                  {friends.map((friend, index) => (
                    <option key={index} value={friend}>{friend}</option>
                  ))}
                </select>
              </div>
              <div className={styles["form-group"]}>
                <label>Time Left</label>
                <input type="datetime-local" name="timeLeft" value={newTask.timeLeft} onChange={handleChange} required />
              </div>
              <div className={styles["form-group"]}>
                <label>Amount</label>
                <div className={styles["amount-buttons"]}>
                  <button
                    type="button"
                    className={selectedAmount === 1 ? styles["selected"] : ""}
                    onClick={() => handleAmountClick(1)}
                  >
                    $1
                  </button>
                  <button
                    type="button"
                    className={selectedAmount === 5 ? styles["selected"] : ""}
                    onClick={() => handleAmountClick(5)}
                  >
                    $5
                  </button>
                  <button
                    type="button"
                    className={selectedAmount === 10 ? styles["selected"] : ""}
                    onClick={() => handleAmountClick(10)}
                  >
                    $10
                  </button>
                </div>
              </div>
              <div className={styles["balance-info"]}>
                <p>Balance: ${balance}</p>
              </div>
              <div className={styles["action-buttons"]}>
                <button type="button" className={styles["exit-button"]} onClick={() => setIsOpen(false)}>✗</button>
                <button type="submit" className={styles["confirm-button"]}>✓</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}