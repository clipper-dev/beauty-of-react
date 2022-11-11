import React from "react";
import styles from "./TodoList.module.css";

function TodoList(props) {
  const priorityClass = (priority) => {
    if (priority === "high") {
      return [styles.priority, styles.priorityHigh].join(" ");
    }
    if (priority === "moderate") {
      return [styles.priority, styles.priorityModerate].join(" ");
    }
    if (priority === "low") {
      return [styles.priority, styles.priorityLow].join(" ");
    }
    return [styles.priority, styles.priorityNone].join(" ");
  };
  return (
    <div className={styles.container}>
      {props.data.map((item, index) => {
        return (
          <div className={styles.item}  key={index}>
            <div>
              <div className={priorityClass(item.priority)}></div>
              <div className={styles.title}>
                {item.title}
              </div>
            </div>
            <div>{item.completed ? "Completed" : "To do"}</div>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
