import React, { useState } from "react";
import theme from './theme.module.scss';

const Tooltip = ({top, left, closeTooltip, task, handleModifyTask}) => {
  const [taskName, changeTaskName] = useState(task || '');

	const handleChangeTaskName = (event) => {
		changeTaskName(event.target.value);
	}
  return (
    <React.Fragment>
      <div className={theme["task-editor-container"]}>
        <div className={theme["task-editor"]} style={{top, left}}>
          <div>
            <textarea value={taskName} onChange={handleChangeTaskName}></textarea>
          </div>
          <div className={theme["task-editor-buttons"]}>
            <button className={theme.button} onClick={() => handleModifyTask(taskName)}>
              Guardar
            </button>
            <button className={theme['button-close']} onClick={closeTooltip}>
              Salir
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Tooltip;
