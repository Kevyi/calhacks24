import React, { useState } from 'react';
import AddTaskButton from '../components/AddTaskButton';
import TaskTable from '../components/TaskTable';
import styles from './pageStyle/tasks.module.css';

export default function Tasks() {
  const [yourTasks, setYourTasks] = useState([
    { status: 'Pending', description: 'Complete the report', friend: 'Alice', amount: 5, timeLeft: '2 hours' },
    { status: 'Pending', description: 'Fix the bug', friend: 'Bob', amount: 10, timeLeft: '1 day' },
    { status: 'Pending', description: 'Write documentation', friend: 'Charlie', amount: 8, timeLeft: '3 days' },
    { status: 'Pending', description: 'Update website', friend: 'Dave', amount: 12, timeLeft: '5 hours' },
  ]);

  const [othersTasks, setOthersTasks] = useState([
    { status: 'Pending', description: 'Review the code', friend: 'Charlie', amount: 15, timeLeft: '3 hours' },
    { status: 'Pending', description: 'Design new logo', friend: 'Eve', amount: 20, timeLeft: '2 days' },
    { status: 'Pending', description: 'Plan event', friend: 'Frank', amount: 25, timeLeft: '1 week' },
    { status: 'Pending', description: 'Organize files', friend: 'Grace', amount: 18, timeLeft: '4 hours' },
  ]);

  const friends = ['Alice', 'Bob', 'Charlie']; // Example friends list

  const addTask = (task) => {
    setYourTasks([...yourTasks, task]);
  };

  const confirmTask = (task) => {
    setOthersTasks(othersTasks.filter(t => t !== task));
  };

  return (
    <div className={styles["tasks-page"]}>
      <h1>Tasks</h1>
      <div className={styles["task-tables"]}>
        <div className={styles["task-section"]}>
          <h2>Your Tasks</h2>
          <TaskTable tasks={yourTasks} showActions={false} />
        </div>
        <div className={styles["task-section"]}>
          <h2>Others' Tasks</h2>
          <TaskTable tasks={othersTasks} onConfirm={confirmTask} showActions={true} />
        </div>
      </div>
      <AddTaskButton friends={friends} addTask={addTask} />
    </div>
  );
}