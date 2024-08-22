import React, { useContext } from 'react';
import TaskContext from '../context/TaskContext';

function Task({ task }) {
  const { toggleTaskCompletion, removeTask } = useContext(TaskContext);

  return (
    <div style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {task.text}
      <button onClick={() => toggleTaskCompletion(task.id)}>Toggle</button>
      <button onClick={() => removeTask(task.id)}>Delete</button>
    </div>
  );
}

export default Task;
