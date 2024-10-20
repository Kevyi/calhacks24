import React, { useState } from 'react';
import styles from './componentStyle/AddTaskButton.module.css';

export default function AddTaskButton({ friends, addTask }) {
  const [showForm, setShowForm] = useState(false);
  const [taskData, setTaskData] = useState({
    friend: '',
    timeLimit: '',
    description: '',
    penalty: 1,
  });

  const handleChange = (e) => {
    setTaskData({
      ...taskData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePenaltyClick = (penalty) => {
    setTaskData({
      ...taskData,
      penalty,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskData);
    setShowForm(false);
    setTaskData({
      friend: '',
      timeLimit: '',
      description: '',
      penalty: 1,
    });
  };

  return (
    <div>
      <button className={`${styles["add-task-button"]} ${showForm ? 'expand' : ''}`} onClick={() => setShowForm(true)}>+</button>
      {showForm && (
        <div className={styles["task-form-container"]}>
          <button className={styles["close-button"]} onClick={() => setShowForm(false)}>×</button>
          <form onSubmit={handleSubmit}>
            <div className= {styles["form-group friend-group"]}>
              <label htmlFor="friend">Friend:</label>
              <select name="friend" value={taskData.friend} onChange={handleChange} required>
                <option value="">Select a friend</option>
                {friends.map((friend, index) => (
                  <option key={index} value={friend}>{friend}</option>
                ))}
              </select>
            </div>
            <div className={styles["form-group time-limit-group"]}>
              <label htmlFor="timeLimit">Time Limit:</label>
              <input
                type="datetime-local"
                name="timeLimit"
                value={taskData.timeLimit}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles["form-group description-group"]}>
              <label htmlFor="description">Task Description:</label>
              <input type="text" name="description" value={taskData.description} onChange={handleChange} required />
            </div>
            <div className={styles["form-group penalty-group"]}>
              <label>Penalty:</label>
              <button type="button" className={`${styles["penalty-button"]} ${taskData.penalty === 1 ? styles['active'] : ''}`} onClick={() => handlePenaltyClick(1)}>$1</button>
              <button type="button" className={`${styles["penalty-button"]} ${taskData.penalty === 5 ? styles['active'] : ''}`} onClick={() => handlePenaltyClick(5)}>$5</button>
              <button type="button" className={`${styles["penalty-button"]} ${taskData.penalty === 10 ? styles['active'] : ''}`} onClick={() => handlePenaltyClick(10)}>$10</button>
            </div>
            <button type="submit" className={styles["confirm-button"]}>Confirm</button>
          </form>
        </div>
      )}
    </div>
  );
}