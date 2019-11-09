const actions = {
    setUsername: (store, username, id) => {
        store.setState({
            user: {
                username: username,
                id: id
            }
        })
    },
};

export default actions;