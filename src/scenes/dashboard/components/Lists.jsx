import React, { useState, useEffect } from "react";
import useGlobalState from "../../../state";
import Task from "./Task";
import Tooltip from "./Tooltip";
import Modal from '../../../components/modal';
import NewTask from './NewTask';
import { ReactComponent as Delete } from '../../../ui-library/svg/delete.svg';
import theme from "./theme.module.scss";

function offset(el) {
  var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}

const Lists = ({ id, name }) => {
  const [idList, changeIdList] = useState(null);
  const [newTask, changeNewTask] = useState("");
  const [newTaskName, changeNewTaskName] = useState("");
  const [showModal, changeShowModal] = useState(false);
  const [displayTooltip, changeDisplayTooltip] = useState(false);
  const [tooltipPosition, changeTooltipPosition] = useState(null);
  const [selectedIdTask, changeSelectedIdTask] = useState(null);

  const [globalState, globalActions] = useGlobalState();
  const {
    tasks: {
      tasks: { [idList]: filteredTasks }
    }
  } = globalState;
  const {
    tasks: { add: addNewTask, modify, },
    lists: { destroy }
  } = globalActions;
  const [prepareInputNewTask, changePrepareInputNewTask] = useState(false);

  useEffect(() => {
    changeIdList(id);
  }, [id]);

  const handleTogglePrepareNewTask = () => {
    changePrepareInputNewTask(!prepareInputNewTask);
  };

  const handleChangeTaskName = event => {
    changeNewTaskName(event.target.value);
  };

  const handleChangeNewTask = event => {
    changeNewTask(event.target.value);
  };

  const handleDisplayTooltip = (ref, idTask) => {
    changeDisplayTooltip(true);
    const position = offset(ref.current);
    changeTooltipPosition({ top: position.top, left: position.left });
    changeSelectedIdTask(idTask);
    changeNewTaskName(ref.current.childNodes[0].innerText);
  };

  const handleHideTooltip = () => {
    changeDisplayTooltip(false);
  };

  const handleModifyTask = task => {
		const status = modify(selectedIdTask, idList, task);
		if(status) {
			handleHideTooltip();
		}
  };

  const toggleModal = () => {
    changeShowModal(!showModal);
  };
  const handleCheckBeforeDeleteList = () => {
    if(filteredTasks) {
      toggleModal(true);
      return;
    }

    handleDeleteList();
  }
  const handleDeleteList = () => {
    if(filteredTasks) {
      toggleModal();
    }
     destroy(id);
  };

  return (
    <div className={theme.list}>
      <header>
        <span>{name}</span>
        <div className={theme.delete} onClick={handleCheckBeforeDeleteList}> <Delete /> </div>
      </header>
      <ul>
        {filteredTasks &&
          filteredTasks.map((task, i) => (
            <Task
              id={task.id}
              task={task.task}
              index={i}
              handleDisplayTooltip={handleDisplayTooltip}
            />
          ))}
        {prepareInputNewTask && (
          <NewTask addNewTask={addNewTask} idList={idList} handleClose={handleTogglePrepareNewTask}/>
        )}
      </ul>
      <footer>
        <button onClick={handleTogglePrepareNewTask}>Añadir tarea</button>
      </footer>
      {displayTooltip && (
        <Tooltip
          top={tooltipPosition.top}
          left={tooltipPosition.left}
          closeTooltip={handleHideTooltip}
          task={newTaskName}
          handleModifyTask={handleModifyTask}
        />
      )}
      { showModal &&
        <Modal handleDelete={handleDeleteList} handleClose={toggleModal}/>
      }
    </div>
  );
};

export default Lists;
