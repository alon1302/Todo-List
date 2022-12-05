import React from "react";
import TaskItem from "./TaskItem";

import "../style/TaskList.css";

const TaskList = (props) => {
  return (
    <div className="task-list">
      {props.tasks.map((task) => (
        <TaskItem
          task={task}
          handleDelete={props.handleDelete}
          handleChecked={props.handleChecked}
          key={task.id}
        />
      ))}
    </div>
  );
};

export default TaskList;
