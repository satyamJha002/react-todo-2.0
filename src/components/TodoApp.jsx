import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoModal from "./TodoModal";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const addTodo = (todo) => {
    setTodos([...todos, { text: todo, completed: false }]);
  };

  useEffect(() => {
    const storedTodos = JSON.parse(window.localStorage.getItem("todos"));
    console.log("storedTodos", storedTodos);
    if (storedTodos !== null) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleTodoClick = (todo) => {
    if (!todo.completed) {
      setSelectedTodo(todo);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTodo(null);
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 p-4 bg-gray-100">
        <TodoForm addTodo={addTodo} />
      </div>

      <div className="w-full md:w-1/2 bg-white flex justify-center items-center">
        <TodoList
          todos={todos}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
          onTodoClick={handleTodoClick}
        />
      </div>
      {isModalOpen && <TodoModal todo={selectedTodo} onClose={closeModal} />}
    </div>
  );
};

export default TodoApp;
