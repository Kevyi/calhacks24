import React from 'react';
import TaskItem from './TaskItem.jsx';
import './componentStyle/TaskTable.css';

export default function TaskTable({ tasks }) {
  return (
    <div className="task-table">
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          status={task.status}
          description={task.description}
          friend={task.friend}
          amount={task.amount}
          timeLeft={task.timeLeft}
        />
      ))}
    </div>
  );
}