import React, { useState, useContext } from 'react';
import TaskContext from '../context/TaskContext';

function AddTask() {
  const [task, setTask] = useState('');
  const { addTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask(''); // Clear input field after adding the task
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTask;
