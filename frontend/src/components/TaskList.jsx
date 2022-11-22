import React, { useState } from "react";
import Task from "./Task";

const TaskList = () => {
  const [tasks, setTasks] = useState(["alon", "roy"]);
  return tasks.map((task) => <Task task={task} />);
};

export default TaskList;
