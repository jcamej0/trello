import React, {useState} from 'react';
import AccessForm from '../../components/access-form';
import actions from '../../services/signup';
import Spinner from '../../ui-library/loading-spinner';
import './theme.scss';

const Signup = () => {
	const [signupStatus, changeSignupStatus] = useState(false);

	const handleSignup = async ({name, password}) => {
		changeSignupStatus('isLoading');
		const registerStatus = await actions.register({name, password});
		if(registerStatus) {
			changeSignupStatus(true);
			return;
		} else {
			changeSignupStatus(false);
		}
	}
	return(
		<div className="container">
			<div className="login-container">
				<h1>Registro</h1>
				<AccessForm onSubmit={handleSignup} label="Registrarse"/>
				<p>Iniciar sesión</p>
				{signupStatus === 'isLoading' &&
					<Spinner opaque />
				}
			</div>
		</div>
	)
};

export default Signup;