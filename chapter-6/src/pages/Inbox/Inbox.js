import React, { useState } from "react";
import AddTodo from "../../components/AddTodo/AddTodo";
import TodoList from "../../components/TodoList/TodoList";
import { todoList as defaultData } from "../../data/todoList";

function Inbox() {
  /* setting the state of the todo list */
  const [todoList, setTodoList] = useState(defaultData);
  /* function to add new todo */
  
  return (
    <>
      <TodoList data={todoList} />
      {/* form to create new todo */}
      <AddTodo todoList={todoList} setTodoList={setTodoList} />
    </>
  );
}

export default Inbox;
