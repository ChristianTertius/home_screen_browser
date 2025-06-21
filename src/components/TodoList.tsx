import React, { useState } from "react";
import { useTodos } from "../hooks/useTodos";

export function TodoList() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <div className="hidden sm:block absolute bg-white/80 backdrop-blur-sm max-w-md mx-auto mt-8 p-6 rounded-2xl shadow-xl top-15 right-5 z-[9999]">
      {/* sekarang scrollbarnya disini */}
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add new todo..."
            className="focus:shadow-sm flex-1 px-3 py-2 border-2 border-gray-700 rounded-md focus:outline-none transition-all duration-150"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-gray-700 bg-black rounded-md hover:bg-black focus:outline-none text-white transition-all duration-150 cursor-pointer"
          >
            Add
          </button>
        </div>
      </form>
      {/* saya mau scrollbarnya disini */}
      <div className="overflow-y-auto max-h-[20vh] scrollbar">
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center gap-3 p-2 rounded-lg transition-colors"
            >
              {/* Shadcn UI Style Checkbox */}
              <div className="relative flex-shrink-0">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="sr-only peer"
                />
                <div
                  onClick={() => toggleTodo(todo.id)}
                  className={`
h-4 w-4 shrink-0 rounded-sm border border-slate-200 ring-offset-white 
focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 
disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer transition-colors
flex items-center justify-center
${
  todo.completed
    ? "bg-slate-900 text-slate-50 border-slate-900"
    : "bg-white hover:bg-slate-50"
}
`}
                >
                  {/* Checkmark Icon */}
                  <svg
                    className={`
h-3 w-3 transition-opacity duration-200
${todo.completed ? "opacity-100" : "opacity-0"}
`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>

              <span
                className={`flex-1 transition-all duration-300 ${
                  todo.completed
                    ? "line-through text-gray-500 opacity-75"
                    : "text-gray-800"
                }`}
              >
                {todo.text}
              </span>

              <button
                onClick={() => deleteTodo(todo.id)}
                className="px-2 py-1 text-red-500 hover:bg-red-50 rounded text-sm transition-colors flex-shrink-0 cursor-pointer"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      {todos.length === 0 && (
        <p className="text-gray-500 text-center mt-4">
          No todos yet. Add one above!
        </p>
      )}
    </div>
  );
}
