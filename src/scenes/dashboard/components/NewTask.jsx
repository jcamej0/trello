import React, { useState } from "react";

const NewTask = ({ addNewTask, idList, handleClose }) => {
  const [taskName, changeTaskName] = useState("");

  const handleChangeTaskName = event => {
    changeTaskName(event ? event.target.value : '');
  };

  
  const handleAddNewTask = () => {
    if(!taskName) {
        handleClose();
        return;
    }
    addNewTask(idList, taskName);
    handleChangeTaskName("");
    handleClose();
  };

  return (
    <div>
      <input
        type="text"
        value={taskName}
        onChange={handleChangeTaskName}
        onBlur={handleAddNewTask}
      ></input>
    </div>
  );
};

export default NewTask;
