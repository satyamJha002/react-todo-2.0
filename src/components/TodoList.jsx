import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleComplete, removeTodo, onTodoClick }) => {
  return (
    <div className="max-h-96 overflow-y-auto">
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            todo={todo}
            key={index}
            index={index}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
            onClick={() => onTodoClick(todo)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
