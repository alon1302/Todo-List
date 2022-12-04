import React from "react";
import { useState } from "react";

const TaskItem = (props) => {
  return (
    <div className="taskItem">
      <input
        type="checkbox"
        checked={props.task.checked}
        onChange={() => props.handleChecked(props.task.id)}
      />
      <span>{props.task.content}</span>
      <button onClick={() => props.handleDelete(props.task.id)}>delete</button>
    </div>
  );
};

export default TaskItem;
