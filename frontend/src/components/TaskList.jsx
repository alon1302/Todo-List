import React, { useEffect, useState } from "react";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { content: "alon", id: 1, checked: false },
    { content: "roy", id: 2, checked: false },
  ]);

  // useEffect(() => {
  //   fetch("http://127.0.0.1:5000/tasks")
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       }
  //       throw new Error("bad response");
  //     })
  //     .then((res) => {
  //       setTasks(res);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  const handleDelete = (id) => {
    console.log("click");
    let newtasks = [...tasks];
    newtasks = newtasks.filter((task) => task.id != id);
    setTasks(newtasks);
  };

  const handleChecked = (id) => {
    console.log("checked", id);
    let newtasks = tasks.map((task) => {
      if (task.id === id) {
        console.log(task.content);
        return { ...task, checked: !task.checked };
      }
      return task;
    });
    console.log(newtasks);
    setTasks(newtasks);

    console.log(tasks);
  };

  return tasks.map((task) => (
    <TaskItem
      task={task}
      handleDelete={handleDelete}
      handleChecked={handleChecked}
      key={task.id}
    />
  ));
};

export default TaskList;
