"use client";
import React, { useState } from "react";

type Todo = {
  id: number;
  name: string;
};

const TodoComp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [todoId, setTodoId] = useState<number>();

  const addTodoHandler = () => {
    if (!inputValue.trim()) return;
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: inputValue,
      },
    ]);
    setInputValue("");
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleRemoveTodo = (id: number) => {
    const todosData = todos.filter((ele) => ele?.id !== id);

    setTodos(todosData);
  };

  const handleEditTodo = (id: number) => {
    setIsEdit(true);
    setTodoId(id);
  };
  const handleOnEditChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number,
  ) => {
    const value = e.target.value;

    const todoData = todos.map((ele) => {
      if (ele?.id === id) {
        return {
          id: id,
          name: value,
        };
      }
      return ele;
    });
    setTodos(todoData);
  };

  const handleSaveTodo = () => {
    setIsEdit(false);
  };

  return (
    <>
      <h1>Todo List</h1>

      {/* <input type="text" /> */}

      <div className="flex gap-5">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => handleOnChange(e)}
          className="border border-red-400"
        />
        <button onClick={addTodoHandler}>Add Todo</button>
      </div>
      {todos.map((ele, index) => {
        return (
          <div className="flex flex-col gap-3" key={ele?.id}>
            <div className="flex gap-5">
              {isEdit && todoId === ele?.id ? (
                <input
                  type="text"
                  value={ele?.name}
                  className={`${todoId === ele?.id ? "border border-amber-200" : ""}`}
                  onChange={(e) => handleOnEditChange(e, ele?.id)}
                />
              ) : (
                <p>{ele?.name}</p>
              )}

              <button onClick={() => handleRemoveTodo(ele?.id)}>remove</button>
              {isEdit && todoId === ele?.id ? (
                <button onClick={() => handleSaveTodo()}>save</button>
              ) : (
                <button onClick={() => handleEditTodo(ele?.id)}>edit</button>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TodoComp;
