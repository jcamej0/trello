import React, { useState } from "react";

const EditListName = ({ currentName, handleEdit, idList, closeEditList }) => {
  const [newListname, changeListName] = useState(currentName);
  const handleChangeListName = event => {
    changeListName(currentName ? event.target.value : "");
  };
  const handleSaveNewListName = () => {
    handleEdit(newListname, idList);
    closeEditList();
  };
  return (
    <div>
      <input
        value={newListname}
        onChange={handleChangeListName}
        onBlur={handleSaveNewListName}
      />
    </div>
  );
};
export default EditListName;
