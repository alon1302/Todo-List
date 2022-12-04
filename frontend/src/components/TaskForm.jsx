import React, { useState } from "react";

import "../style/TaskForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredContent, setEnteredContent] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const contentChangeHandler = (event) => {
    setEnteredContent(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const taskData = {
      title: enteredTitle,
      content: enteredContent,
      date: new Date(enteredDate),
    };

    props.onSubmit(taskData);
    setEnteredTitle("");
    setEnteredContent("");
    setEnteredDate("");
  };

  return (
    <div className="new-task">
      <form onSubmit={submitHandler}>
        <div className="new-task__controls">
          <div className="new-task__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-task__control">
            <label>Task</label>
            <input
              type="text"
              value={enteredContent}
              onChange={contentChangeHandler}
            />
          </div>
          <div className="new-task__control">
            <label>Last Date For Completing</label>
            <input
              type="date"
              min={new Date()}
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-task__actions">
          <button type="submit">Add Task</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
