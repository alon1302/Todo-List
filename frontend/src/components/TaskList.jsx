import React, { useEffect, useState } from "react";
import Task from "./Task";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    //{ content: "alon", id: 1 },
    //{ content: "roy", id: 2 },
  ]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/tasks")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("bad response");
      })
      .then((res) => {
        setTasks(res);
      })
      .catch((err) => console.log(err));
  }, []);

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
