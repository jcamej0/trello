import React, { useState } from 'react';

const AccessForm = ({onSubmit, label}) => {
    const [name, changeName] = useState();
    const [password, changePassword] = useState();

    const handleNameChange = (event) => {
        changeName(event.target.value);
    };

    const handlePasswordChange = (event) => {
        changePassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({name, password});
    };

  return(
    <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleNameChange} />
        <input type="password" value={password} onChange={handlePasswordChange} />
        <input type="submit" value={label} />
    </form>
  )  
};

export default AccessForm;