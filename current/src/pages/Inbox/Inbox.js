import React, { useState } from "react";
import AddTodo from "../../components/AddTodo/AddTodo";
import TodoList from "../../components/TodoList/TodoList";
import { todoList as defaultData } from "../../data/todoList";

function Inbox() {
  /* setting the state of the todo list */
  const [todoList, setTodoList] = useState(defaultData);
  /* function to add new todo */
  const addTodo = (e) => {
    e.preventDefault();
    if (e.target.title.value === "") {
      alert("Please enter a title")
      return;
    };
    const newTodo = {
      title: e.target.title.value,
      priority: e.target.priority.value,
      completed: false,
    };
    setTodoList([...todoList, newTodo]);
    e.target.reset();
  };
  return (
    <>
      <TodoList data={todoList} />
      {/* form to create new todo */}
      <AddTodo addTodo={addTodo} />
    </>
  );
}

export default Inbox;
