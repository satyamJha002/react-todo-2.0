import React from "react";
import { CheckBoxOutlineBlank, CheckBoxOutlined } from "@mui/icons-material";
import { DeleteForever } from "@mui/icons-material";
import { Divider, List, ListItem } from "@mui/material";

const style = {
  p: 0,
  width: "100%",
  maxWidth: 360,
  borderRadius: 2,
  border: "1px solid",
  borderColor: "divider",
  backgroundColor: "background.paper",
};

const TodoItem = ({ todo, toggleComplete, index, removeTodo, onClick }) => {
  return (
    <div className="flex gap-2 py-2">
      <List
        sx={style}
        style={{ textDecoration: todo.completed ? "line-through" : "" }}
      >
        <ListItem
          onClick={onClick}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <p className="text-lg">
            {todo.text.title.charAt(0).toUpperCase() + todo.text.title.slice(1)}
          </p>

          <p>{todo.text.date}</p>
        </ListItem>
      </List>
      <button onClick={() => toggleComplete(index)}>
        {todo.completed ? <CheckBoxOutlined /> : <CheckBoxOutlineBlank />}
      </button>
      <button onClick={() => removeTodo(index)}>
        <DeleteForever />
      </button>
    </div>
  );
};

export default TodoItem;
