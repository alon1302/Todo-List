import React from "react";
import TaskItem from "./TaskItem";

import "../style/TaskList.css";

const TaskList = (props) => {
  return props.tasks.map((task) => (
    <div className="task-list">
      <TaskItem
        task={task}
        handleDelete={props.handleDelete}
        handleChecked={props.handleChecked}
        key={task.id}
      />
    </div>
  ));
};

export default TaskList;
