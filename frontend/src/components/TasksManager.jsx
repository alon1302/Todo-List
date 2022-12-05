import React from "react";
import { useState } from "react";

import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

import { v4 as uuid } from "uuid";

const TasksManager = () => {
  const [tasks, setTasks] = useState([
    {
      title: "Example Task",
      content: "take a shower",
      date: new Date(),
      checked: true,
      id: uuid(),
    },
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
    newtasks = newtasks.filter((task) => task.id !== id);
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
  };

  const formSubmitHandler = (task) => {
    const newTask = { ...task, id: uuid(), checked: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className="tasklist">
      <TaskForm onSubmit={formSubmitHandler} />
      <TaskList
        tasks={tasks}
        handleDelete={handleDelete}
        handleChecked={handleChecked}
      />
    </div>
  );
};

export default TasksManager;
