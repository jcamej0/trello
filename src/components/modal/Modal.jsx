import React from "react";
import theme from "./theme.module.scss";
const Modal = ({handleDelete, handleClose}) => {
  return (
    <React.Fragment>

      <div  className={theme["modal-window"]}>
        <div>
          <span  className={theme["modal-close"]} onClick={handleClose}>
            Cerrar
          </span>
          <h1>Advertencia!</h1>
          <div>
            <p>Esta lista posee tareas</p>
						<p>¿Seguro que quieres eliminarlas?</p>
						<button className={theme.btn} onClick={handleDelete}>
							ELIMINAR
						</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
