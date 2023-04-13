import React from "react";
import { useState } from "react";
import { useTodo } from "../../Context/TodoContext";
import { useUser } from "../../Context/UserContext";

export const Main = () => {
  const { user, addTodo } = useUser();
  const { todos } = user;

  const [todoText, setTodoText] = useState("");

  const handleInputChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    addTodo(todoText, user._id);
  };

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="add todo"
          className="border border-gray-400"
          value={todoText}
          onChange={handleInputChange}
        />
        <button className="bg-green-500">Add todo</button>
      </form>
      {todos?.map((todo) => {
        return (
          <div key={todo._id} className="flex gap-4">
            <p>{todo.text}</p>
            <p>{todo.status}</p>
            <button>Delete</button>
            <button>Update</button>
          </div>
        );
      })}
    </div>
  );
};
