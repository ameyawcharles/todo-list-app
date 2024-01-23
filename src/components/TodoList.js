import React from "react";
import TodoItem from './TodoItem';

const TodoList = ({tasks, onTaskToggle, onTaskRemove}) => {
    return (
        <ul>
            {tasks.map(task => (
               <TodoItem 
                    key={task.id}
                    task={task}
                    onTaskToggle={onTaskToggle}
                    onTaskRemove={onTaskRemove}
               />
            ))}
           
        </ul>
    );
};

export default TodoList;