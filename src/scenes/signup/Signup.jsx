import React, { useState } from "react";
import { Link } from "react-router-dom";
import AccessForm from "../../components/access-form";
import actions from "../../services/signup";
import Spinner from "../../ui-library/loading-spinner";
import theme from "./theme.module.scss";

const Signup = () => {
	const [signupStatus, changeSignupStatus] = useState(false);
	const [signupMessage, changeSignupMesage] = useState(false);

  const handleSignup = async ({ username, password }) => {
		changeSignupStatus("isLoading");
		changeSignupMesage(false);
    const registerStatus = await actions.register({ username, password });
    if (registerStatus) {
			changeSignupStatus(true);
			changeSignupMesage(true);
      return;
    } else {
      changeSignupStatus(false);
    }
  };
  return (
    <div className={theme.container}>
      <div className={theme["login-container"]}>
        <h1>Registro</h1>
        <AccessForm onSubmit={handleSignup} label="Registrarse" />
				{ signupMessage &&
					<div className={theme["success-message"]}>
						<p>Cuentra creada satisfactoriamente</p>
					</div>
				}
        <Link to="/">
          <p>Iniciar sesión</p>
        </Link>

        {signupStatus === "isLoading" && <Spinner opaque />}
      </div>
    </div>
  );
};

export default Signup;
