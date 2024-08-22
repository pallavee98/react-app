import React from 'react';
// Importing the TaskProvider from TaskContext
import { TaskProvider } from './context/TaskContext';
// Importing the components
import TaskCounter from './components/TaskCounter';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

function App() {
  return (
    <TaskProvider>
      <div className="App">
        <h1>To-Do List</h1>
        <TaskCounter />
        <AddTask />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
