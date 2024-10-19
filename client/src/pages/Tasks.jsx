import React, { useState } from 'react';
import AddTaskButton from '../components/AddTaskButton'; // Corrected path
import './pageStyle/tasks.css';

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const friends = ['Alice', 'Bob', 'Charlie']; // Example friends list

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="tasks-page">
      <h1>Tasks</h1>
      <div className="tasks-list">
        {tasks.map((task, index) => (
          <div key={index} className="task-item">
            <p><strong>Friend:</strong> {task.friend}</p>
            <p><strong>Time Limit:</strong> {task.timeLimit} hours</p>
            <p><strong>Description:</strong> {task.description}</p>
            <p><strong>Penalty:</strong> ${task.penalty}</p>
          </div>
        ))}
      </div>
      <AddTaskButton friends={friends} addTask={addTask} />
    </div>
  );
}