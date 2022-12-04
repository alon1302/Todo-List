import React from "react";

const TaskItem = (props) => {
  return (
    <div className="taskItem">
      <input
        type="checkbox"
        checked={props.task.checked}
        onChange={() => props.handleChecked(props.task.id)}
      />
      <span>{props.task.title} </span>
      <span> {props.task.content} </span>
      {/* <span>{props.task.date.toISOstring()}</span> */}
      <button onClick={() => props.handleDelete(props.task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
