import React from "react";

const Task = ({ task, handleDelete }) => {
  return (
    <div className="taskItem">
      <span>{task.content}</span>
      <button onClick={() => handleDelete(task.id)}>delete</button>
    </div>
  );
};

export default Task;
