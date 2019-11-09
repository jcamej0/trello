
const actions = {
    setAuthToken: (store, authToken) => {
        store.setState({
            auth: {
                authenticated: true,
                authToken: authToken,
            }
        })
    },
}

export default actions;