import React, { useState, useEffect } from 'react';
import AddTaskButton from '../components/AddTaskButton';
import TaskTable from '../components/TaskTable';
import styles from './pageStyle/tasks.module.css';

export default function Tasks() {
  const [yourTasks, setYourTasks] = useState([]);
  const [othersTasks, setOthersTasks] = useState([]);
  const [friends, setFriends] = useState([]);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchTasks = async () => {
      const email = localStorage.getItem('userEmail');
      if (email) {
        try {
          const response = await fetch('http://localhost:8080/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
          });
          const data = await response.json();
          if (response.ok) {
            setYourTasks(data.yourTasks);
            setOthersTasks(data.othersTasks);
            setFriends(data.friends);
            setBalance(data.balance);
          } else {
            console.error(data.message);
          }
        } catch (error) {
          console.error('Error fetching tasks:', error);
        }
      }
    };

    fetchTasks();
  }, []);

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
      <AddTaskButton friends={friends} addTask={addTask} balance={balance} />
    </div>
  );
}