const initialState = {
    authenticated: window.localStorage.getItem('authToken') ? true : false,
    authToken: window.localStorage.getItem('authToken') || null,
};

export default initialState;