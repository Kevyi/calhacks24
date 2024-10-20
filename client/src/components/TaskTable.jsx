import React from 'react';
import TaskItem from './TaskItem';
import styles from './componentStyle/TaskTable.module.css';

export default function TaskTable({ tasks, onConfirm, showActions }) {
  return (
    <div className={styles["task-table"]}>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          onConfirm={onConfirm}
          showActions={showActions}
        />
      ))}
    </div>
  );
}