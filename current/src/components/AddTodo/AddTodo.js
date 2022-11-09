import React from 'react'
import styles from './AddTodo.module.css'

function AddTodo(props) {
    return (
        <form
            className={styles.container}
            onSubmit={props.addTodo}
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