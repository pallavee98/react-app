import React, { createContext, useState, useEffect } from 'react';

// Create the context
const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // Function to add a task
  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  };

  // Function to toggle task completion status
  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Function to remove a task
  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // useEffect to log the task list on every update
  useEffect(() => {
    console.log('Task List Updated:', tasks);
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTaskCompletion, removeTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
