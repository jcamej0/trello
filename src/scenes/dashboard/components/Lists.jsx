import React, { useState, useEffect } from "react";
import useGlobalState from "../../../state";
import Task from "./Task";
import EditListName from "./EditListName";
import Tooltip from "./Tooltip";
import Modal from "../../../components/modal";
import NewTask from "./NewTask";
import { ReactComponent as Delete } from "../../../ui-library/svg/delete.svg";
import { ReactComponent as Edit } from "../../../ui-library/svg/edit.svg";
import theme from "./theme.module.scss";

function offset(el) {
  var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}

const Lists = ({ id, name }) => {
  const [idList, changeIdList] = useState(null);
  const [newTaskName, changeNewTaskName] = useState("");
  const [editTaskName, changeEditTaskName] = useState(false);
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
    tasks: { add: addNewTask, modify: modifyTask },
    lists: { destroy, edit: editList }
  } = globalActions;
  const [prepareInputNewTask, changePrepareInputNewTask] = useState(false);

  useEffect(() => {
    changeIdList(id);
  }, [id]);

  const handleTogglePrepareNewTask = () => {
    changePrepareInputNewTask(!prepareInputNewTask);
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
    const status = modifyTask(selectedIdTask, idList, task);
    if (status) {
      handleHideTooltip();
    }
  };

  const handleToggleEditListName = () => {
    changeEditTaskName(!editTaskName);
  };

  const toggleModal = () => {
    changeShowModal(!showModal);
  };
  const handleCheckBeforeDeleteList = () => {
    if (filteredTasks) {
      toggleModal(true);
      return;
    }

    handleDeleteList();
  };
  const handleDeleteList = () => {
    if (filteredTasks) {
      toggleModal();
    }
    destroy(id);
  };

  return (
    <div className={theme.list}>
      <header>
        {!editTaskName && (
          <div className={theme.header}>
            <span onClick={handleToggleEditListName}>{name}</span>
            <Edit className={theme['edit-name-icon']} />
          </div>
        )}
        {editTaskName && (
          <EditListName
            handleEdit={editList}
            currentName={name}
            idList={idList}
            closeEditList={handleToggleEditListName}
          />
        )}
        <div className={theme.delete} onClick={handleCheckBeforeDeleteList}>
          <Delete />
        </div>
      </header>
      <ul>
        {filteredTasks &&
          filteredTasks.map((task, i) => (
            <Task
              id={task.id}
              task={task.task}
              index={i}
              key={i}
              handleDisplayTooltip={handleDisplayTooltip}
            />
          ))}
        {prepareInputNewTask && (
          <NewTask
            addNewTask={addNewTask}
            idList={idList}
            handleClose={handleTogglePrepareNewTask}
          />
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
      {showModal && (
        <Modal handleDelete={handleDeleteList} handleClose={toggleModal} />
      )}
    </div>
  );
};

export default Lists;
