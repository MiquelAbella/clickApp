import React from "react";
import { useState } from "react";
import { useUser } from "../../Context/UserContext";

export const Main = () => {
  const { user, addTodo, deleteTodo } = useUser();
  const [todo, setTodo] = useState("");

  const handleChangeInput = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todo, user._id);
  };

  const handleDelete = (id) => {
    deleteTodo(id, user._id);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={handleChangeInput}
          placeholder="add todo"
        />
        <button>Add todo</button>
      </form>
      {user.todos.map((todo) => {
        return (
          <div key={todo._id} className="flex justify-between bg-blue-200 m-6">
            <p>{todo.text}</p>
            <button
              onClick={() => handleDelete(todo._id)}
              className="bg-red-300 px-4"
            >
              Del
            </button>
          </div>
        );
      })}
    </div>
  );
};
