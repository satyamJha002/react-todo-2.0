import { Divider } from "@mui/material";
import React from "react";

const TodoModal = ({ todo, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Todo Details</h2>
        <p>{todo.text.title}</p>
        <Divider />
        <p>{todo.text.description}</p>
        <button
          onClick={onClose}
          className="mt-4 w-full p-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TodoModal;
