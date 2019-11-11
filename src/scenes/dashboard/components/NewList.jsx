import React, { useState } from "react";
import { ReactComponent as Close } from '../../../ui-library/svg/close.svg';
import theme from "./theme.module.scss";

const NewList = ({handleCreateList}) => {
  const [addListView, changeAddListView] = useState(false);
  const [name, changeName] = useState("");

  const handleChangeName = event => {
    changeName(event ? event.target.value : '');
  };

  const handleToggleChangeView = () => {
    changeAddListView(!addListView);
	};
	
	const handleCreateNewList = () => {
		if(!name) {
			return;
		}

		handleCreateList(name);
		handleToggleChangeView();
		handleChangeName();
	}
  return (
    <React.Fragment>
      {!addListView && (
        <div className={theme["add-new-list"]} onClick={handleToggleChangeView}>
          <span>Añadir nueva lista</span>
        </div>
      )}
      {addListView && (
        <div className={theme["add-new-list-form"]}>
          <input
            type="text"
            value={name}
            onChange={handleChangeName}
            placeholder="Introduzca el título de la lista..."
          />
          <div>
            <button onClick={ handleCreateNewList }>Añadir lista</button>
						<div onClick={handleToggleChangeView}>
							<Close />
						</div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default NewList;
