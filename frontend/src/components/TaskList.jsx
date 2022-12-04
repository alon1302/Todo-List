import React from "react";
import TaskItem from "./TaskItem";

const TaskList = (props) => {
  return props.tasks.map((task) => (
    <TaskItem
      task={task}
      handleDelete={props.handleDelete}
      handleChecked={props.handleChecked}
      key={task.id}
    />
  ));
};

export default TaskList;
