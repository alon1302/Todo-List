import React from "react";
import DateItem from "./DateItem";

import "../style/TaskItem.css";

const TaskItem = (props) => {
  return (
    <div className="task-item">
      <DateItem date={props.task.date} />
      <div className="task-item__content">
        <h2>{props.task.title} </h2>
        <h4> {props.task.content} </h4>
        <input
          type="checkbox"
          checked={props.task.checked}
          onChange={() => props.handleChecked(props.task.id)}
        />
        <button onClick={() => props.handleDelete(props.task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
