import React, { useState, useRef, useEffect } from "react";

const EditListName = ({ currentName, handleEdit, idList, closeEditList }) => {
  const [newListname, changeListName] = useState(currentName);
  const itemRef = useRef();
  const handleChangeListName = event => {
    changeListName(currentName ? event.target.value : "");
  };
  const handleSaveNewListName = () => {
    if(!newListname || newListname === currentName) {
        closeEditList();
        return;
    }
    handleEdit(newListname, idList);
    closeEditList();
  };

  useEffect( () => {
    itemRef.current.focus();
  }, []);
  return (
    <div>
      <input
        value={newListname}
        onChange={handleChangeListName}
        onBlur={handleSaveNewListName}
        ref={el => itemRef.current = el}
      />
    </div>
  );
};
export default EditListName;
