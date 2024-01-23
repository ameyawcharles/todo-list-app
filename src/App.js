import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Load tasks from local storage on component mount
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  // Save tasks to local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleTaskAdd = (text) => {
    const newTask = {
      id: new Date().getTime(),
      text,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  const handleTaskToggle = (taskId) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  const handleTaskRemove = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onTaskAdd={handleTaskAdd} />
      <TodoList
        tasks={tasks}
        onTaskToggle={handleTaskToggle}
        onTaskRemove={handleTaskRemove}
      />
    </div>
  );
};

export default App;
