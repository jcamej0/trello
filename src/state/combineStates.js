import React from 'react';
import useGlobalHook from './store';
import auth from '../services/auth';
import user from '../services/user';

const state = {
    auth: {
        ...auth.state,
    },
    user: {
        ...user.state,
    }

};

const actions = {
    auth: {
        ...auth.actions,
    },
    user: {
        ...user.actions,
    }
};

const useGlobalState = useGlobalHook(React, actions, state);

export default useGlobalState;