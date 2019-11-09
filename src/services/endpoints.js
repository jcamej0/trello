
const endpointUrl = "https://apitrello.herokuapp.com";
const endpoints = {
    ACCESS: {
        REGISTER: `${endpointUrl}/users`,
        LOGIN: `${endpointUrl}/users/login`,
    },
    LISTS: {
        CREATE: `${endpointUrl}/list`,
        FETCH: `${endpointUrl}/lists`,
        FETCH_SINGLE: `${endpointUrl}/lists/:listId`,
        EDIT: `${endpointUrl}/list/:listId`,
        DELETE: `${endpointUrl}/list/:listId`,
    },
    TASKS: {
        ADD: `${endpointUrl}/tasks`,
        FETCH: `${endpointUrl}/tasks/:listId`,
        DELETE: `${endpointUrl}/tasks/:listId`,
        GET: `${endpointUrl}/tasks/:listId`,
        MODIFY: `${endpointUrl}/tasks/:listId`,
    }
};

export default endpoints;