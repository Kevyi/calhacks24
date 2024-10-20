import React from 'react';
import './componentStyle/TaskItem.css';

export default function TaskItem({ status, description, friend, amount, timeLeft }) {
  return (
    <div className="task-item">
      <div className="task-status">{status}</div>
      <div className="task-description">{description}</div>
      <div className="task-friend">{friend}</div>
      <div className="task-amount">${amount}</div>
      <div className="task-time-left">{timeLeft}</div>
    </div>
  );
}