import React, { useState } from "react";
import Task from "./Task";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { content: "alon", id: 1 },
    { content: "roy", id: 2 },
  ]);

  const handleDelete = (id) => {
    console.log("click");
    let newtasks = [...tasks];
    newtasks = newtasks.filter((task) => task.id != id);
    setTasks(newtasks);
  };

  return tasks.map((task) => (
    <Task task={task} handleDelete={handleDelete} key={task.id} />
  ));
};

export default TaskList;
