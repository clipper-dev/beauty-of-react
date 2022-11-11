import React from 'react'
import styles from './AddTodo.module.css'

function AddTodo(props) {
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
        props.setTodoList([...props.todoList, newTodo]);
        e.target.reset();
      };
    return (
        <form
            className={styles.container}
            onSubmit={addTodo}
        >
            <input className={styles.titleInput} type="text" name="title" placeholder="Title" autoFocus/>
            <select className={styles.select} name="priority">
                <option value="none">None</option>
                <option value="high">High</option>
                <option value="moderate">Moderate</option>
                <option value="low">Low</option>
            </select>
            <button className={styles.submitButton} type="submit">Add</button>
        </form>
    )
}

export default AddTodo