import React from "react";
import TodoList from "../../components/TodoList/TodoList";
import { todoList } from "../../data/todoList";

function Inbox() {
  
  return (
    <>
      <TodoList data={todoList} />
    </>
  );
}

export default Inbox;
