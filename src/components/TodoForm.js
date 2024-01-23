import React, { useState } from 'react';

const TodoForm = ({ onTaskAdd }) => {
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      onTaskAdd(newTask);
      setNewTask('');
    }
  };

  return (
    <div>
      <input type="text" value={newTask} onChange={handleInputChange} />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TodoForm;
