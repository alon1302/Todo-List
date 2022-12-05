import React from "react";
import DateItem from "./DateItem";

const TaskItem = (props) => {
  return (
    <div className="taskItem">
      <input
        type="checkbox"
        checked={props.task.checked}
        onChange={() => props.handleChecked(props.task.id)}
      />
      <DateItem date={props.task.date} />
      <span>{props.task.title} </span>
      <span> {props.task.content} </span>
      <button onClick={() => props.handleDelete(props.task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
