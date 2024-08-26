import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState({
    title: "",
    description: "",
    date: "",
  });

  const { title, description, date } = value;

  const handleChange = (e) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim() || !date) {
      setError("Title, Description and Date are required");
      setTimeout(() => setError(""), 2000);
      return;
    }
    setValue({ title: "", description: "", date: "" });
    addTodo({ id: new Date(), title, description, date });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="">
          <div className="">
            <label className="">Title</label>
            <input
              type="text"
              value={title}
              name="title"
              onChange={handleChange}
              placeholder="Add title"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="">
            <label htmlFor="" className="">
              Description
            </label>
            <textarea
              type="text"
              value={description}
              name="description"
              onChange={handleChange}
              placeholder="Add Description"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label>Date:</label>
            <input
              type="date"
              value={date}
              name="date"
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        {error && (
          <>
            <p className="text-red-500">{error}</p>
          </>
        )}

        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
