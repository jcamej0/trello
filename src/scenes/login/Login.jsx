import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import useGlobalState from '../../state';
import AccessForm from '../../components/access-form';
import './theme.scss';

const Login = () => {
    const [globalState, globalActions] = useGlobalState();
    const { auth: {
        authenticated
    }} = globalState;

    const {auth: {
        login
    }} = globalActions;

    const handleLogin = async ({ username, password }) => {
        login({ username, password });
    }

    return(
        <div class="container">
            <div class="login-container">
                <h1>Login</h1>
                <AccessForm onSubmit={handleLogin} label="Ingresar" />
                <Link to="/signup">
                    <p>Registrarse</p>
                </Link>
            </div>
            { authenticated &&
                <Redirect to='/dashboard' />
            }
        </div>
    )

};

export default Login;