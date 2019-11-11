import React, { useRef } from "react";
import { ReactComponent as Edit } from "../../../ui-library/svg/edit.svg";
import theme from './theme.module.scss';

const Task = ({id, index, task, handleDisplayTooltip }) => {
	const itemRef = useRef();
  return (
    <React.Fragment>
      <li key={id} id={id} ref={el => (itemRef.current = el)}>
        <span>{task}</span>
        <div className={theme.toolbox} onClick={() => handleDisplayTooltip(itemRef, id)}>
        <Edit className={theme['edit-name-icon']} />
        </div>
      </li>
    </React.Fragment>
  );
};

export default Task;
