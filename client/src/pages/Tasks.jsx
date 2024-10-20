import React, { useState, useEffect} from 'react';
import AddTaskButton from '../components/AddTaskButton';
import TaskTable from '../components/TaskTable';
import './pageStyle/tasks.module.css';

export default function Tasks() {
  const [yourTasks, setYourTasks] = useState([
    { status: 'Pending', description: 'Complete the report', friend: 'Alice', amount: 5, timeLeft: '2 hours' },
    { status: 'Completed', description: 'Buy groceries', friend: 'Bob', amount: 10, timeLeft: '1 day' },
  ]);

  const [othersTasks, setOthersTasks] = useState([
    { status: 'Pending', description: 'Review the code', friend: 'Charlie', amount: 15, timeLeft: '3 hours' },
    { status: 'Completed', description: 'Prepare presentation', friend: 'Dave', amount: 20, timeLeft: '2 days' },
  ]);

  const friends = ['Alice', 'Bob', 'Charlie']; // Example friends list

  const addTask = (task) => {
    setYourTasks([...yourTasks, task]);
  };

  return (
    <div className="tasks-page">
      <h1>Tasks</h1>
      <div className="task-tables">
        <div className="task-section">
          <h2>Your Tasks</h2>
          <TaskTable tasks={yourTasks} />
        </div>
        <div className="task-section">
          <h2>Others' Tasks</h2>
          <TaskTable tasks={othersTasks} />
        </div>
      </div>
      <AddTaskButton friends={friends} addTask={addTask} />
    </div>
  );
}