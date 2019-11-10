import React, { useState } from "react";
import theme from "./theme.module.scss";

const AccessForm = ({ onSubmit, label }) => {
  const [username, changeUsername] = useState();
  const [password, changePassword] = useState();

  const handleNameChange = event => {
    changeUsername(event.target.value);
  };

  const handlePasswordChange = event => {
    changePassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ username, password });
  };

  return (
    <form className={theme.form} onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={handleNameChange} />
      <input type="password" value={password} onChange={handlePasswordChange} />
      <button type="submit"> {label}</button>
    </form>
  );
};

export default AccessForm;
