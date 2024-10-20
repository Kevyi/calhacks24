import React, { useState, useEffect } from 'react';
import AddTaskButton from '../components/AddTaskButton';
import TaskTable from '../components/TaskTable';
import styles from './pageStyle/tasks.module.css';
import Navbar1 from '../components/Navigationbar'; // Correct Navbar import

export default function Tasks() {
  const [yourTasks, setYourTasks] = useState([]);
  const [othersTasks, setOthersTasks] = useState([]);
  const [friends, setFriends] = useState([]);
  const [balance, setBalance] = useState(0);

  let myTasks = [];
  let theirTasks = [];
  let friendsList = [];
  let balanceName = 0;

  useEffect(() => {
    const fetchTasks = async () => {
      const email = JSON.parse(localStorage.getItem('user')).email;

      if (email) {
        try {
          const response = await fetch('http://localhost:8080/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
          });
          
          const data = await response.json();

          console.log(data)


          for(let i = 0; i < data.length; i++){
            myTasks.push( { description: data[i].description, friend: data[i].friendUsername, amount: data[i].money, timeLeft: data[i].due_date });
          }



          if (response.ok) {
            setYourTasks(myTasks);
            //setOthersTasks(data.othersTasks);
            //setFriends(data.friends);
            //setBalance(data.balance);
          } else {
            console.error(data.message);
          }
        } catch (error) {
          console.error('Error fetching tasks:', error);
        }
      }

      //////////////////////////
      if (email) {
        try {
          const response = await fetch('http://localhost:8080/tasksTheir', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
          });
          
          const data = await response.json();

          console.log(data)


          for(let i = 0; i < data.length; i++){
            theirTasks.push( { description: data[i].description, friend: data[i].username, amount: data[i].money, timeLeft: data[i].due_date });
          }

          if (response.ok) {
            //setYourTasks(data.yourTasks);
            setOthersTasks(theirTasks);
            //setFriends(data.friends);
            //setBalance(data.balance);
          } else {
            console.error(data.message);
          }
        } catch (error) {
          console.error('Error fetching tasks:', error);
        }
      }
        //////////////////////////
      if (email) {
        try {
          const response = await fetch('http://localhost:8080/tasksFriendsBal', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
          });
          
          const data = await response.json();

          console.log(data)


          friendsList = JSON.parse(data[0].user_friends);
          console.log("Friends List: " + friendsList)

          balanceName = data[0].balance;

          if (response.ok) {
            //setYourTasks(data.yourTasks);
            //setOthersTasks(data.othersTasks);
            setFriends(friendsList);
            setBalance(balanceName);
          } else {
            console.error("Error");
          } 
        } catch (error) {
          console.error('Error fetching tasks:', error);
        }
      }



    };

    fetchTasks();
  }, []);

  const addTask = async (task) => {
    setYourTasks([...yourTasks, task]);

    console.log("This is the task object: " + task.friend)

    // Send the new task and updated balance to the backend
    const email = JSON.parse(localStorage.getItem('user')).email;
    try {
      const response = await fetch('http://localhost:8080/add-task', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, task}),
      });
      const data = await response.json();
      if (!response.ok) {
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const confirmTask = async (task) => {
    setOthersTasks(othersTasks.filter(t => t !== task));

    // Send the task to delete to the backend
    const email = JSON.parse(localStorage.getItem('user')).email;
    try {
      const response = await fetch('http://localhost:8080/delete-task', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, task }),
      });
      const data = await response.json();
      if (response.ok) {
        console.error("Inserted Task");
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <>
    <Navbar1></Navbar1>
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
    </>
  );
}