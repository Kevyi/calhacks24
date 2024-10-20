import React, { useState } from 'react';
import styles from './componentStyle/TaskItem.module.css';

export default function TaskItem({ task, onConfirm, showActions }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleConfirm = () => {
    onConfirm(task);
  };

  return (
    <div className={styles["task-item"]}>
      <div className={styles["task-summary"]} onClick={handleExpand}>
        <div className={styles["task-status"]}>{task.status}</div>
        <div className={styles["task-description"]}>{task.description}</div>
      </div>
      {isExpanded && (
        <div className={styles["task-details"]}>
          <div className={styles["task-friend"]}>Friend: {task.friend}</div>
          <div className={styles["task-amount"]}>Amount: ${task.amount}</div>
          <div className={styles["task-time-left"]}>Time Left: {task.timeLeft}</div>
          {showActions && (
            <div className={styles["task-actions"]}>
              <button className={styles["confirm-button"]} onClick={handleConfirm}>✓</button>
              <button className={styles["exit-button"]} onClick={handleExpand}>✗</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}