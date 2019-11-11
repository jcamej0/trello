import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import useGlobalState from "../../state";
import AccessForm from "../../components/access-form";
import theme from "./theme.module.scss";

const Login = () => {
	const [globalState, globalActions] = useGlobalState();
	const [errorLoginMessage, changeErrorLoginMessage] = useState(false);
  const {
    auth: { authenticated }
  } = globalState;

  const {
    auth: { login }
  } = globalActions;
	
  const handleLogin = async ({ username, password }) => {
		const success = await login({ username, password });
		if(!success) {
			changeErrorLoginMessage(true);
		}
  };

  return (
    <div className={theme.container}>
      <div className={theme['login-container']}>
        <h1>Login</h1>
        <AccessForm onSubmit={handleLogin} label="Ingresar" />
				{ errorLoginMessage &&
					<p className={theme['error-message']}>Error, usuario no encontrado.</p>
				}
        <Link to="/signup">
          <p>Registrarse</p>
        </Link>
      </div>
      {authenticated && <Redirect to="/dashboard" />}
    </div>
  );
};

export default Login;
