import React from 'react';

const TodoItem = ({ task, onTaskToggle, onTaskRemove }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onTaskToggle(task.id)}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={() => onTaskRemove(task.id)}>Remove</button>
    </li>
  );
};

export default TodoItem;
