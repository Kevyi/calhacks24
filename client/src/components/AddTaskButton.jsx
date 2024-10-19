import React, { useState } from 'react';
import './componentStyle/AddTaskButton.css';

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
      <button className={`add-task-button ${showForm ? 'expand' : ''}`} onClick={() => setShowForm(!showForm)}>+</button>
      {showForm && (
        <div className="task-form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="friend">Friend:</label>
              <select name="friend" value={taskData.friend} onChange={handleChange} required>
                <option value="">Select a friend</option>
                {friends.map((friend, index) => (
                  <option key={index} value={friend}>{friend}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="timeLimit">Time Limit:</label>
              <input type="number" name="timeLimit" value={taskData.timeLimit} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="description">Task Description:</label>
              <input type="text" name="description" value={taskData.description} onChange={handleChange} required />
            </div>
            <div className="form-group penalty-group">
              <label>Penalty:</label>
              <button type="button" className={taskData.penalty === 1 ? 'active' : ''} onClick={() => handlePenaltyClick(1)}>$1</button>
              <button type="button" className={taskData.penalty === 5 ? 'active' : ''} onClick={() => handlePenaltyClick(5)}>$5</button>
              <button type="button" className={taskData.penalty === 10 ? 'active' : ''} onClick={() => handlePenaltyClick(10)}>$10</button>
            </div>
            <button type="submit" className="confirm-button">Confirm</button>
          </form>
        </div>
      )}
    </div>
  );
}