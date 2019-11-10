
const endpointUrl = "https://apitrello.herokuapp.com";
const endpoints = {
    ACCESS: {
        REGISTER: `${endpointUrl}/users`,
        LOGIN: `${endpointUrl}/users/login`,
    },
    LISTS: {
        CREATE: `${endpointUrl}/list`,
        FETCH: `${endpointUrl}/list`,
        FETCH_SINGLE: `${endpointUrl}/lists/:id`,
        EDIT: `${endpointUrl}/list/:id`,
        DELETE: `${endpointUrl}/list/:id`,
    },
    TASKS: {
        ADD: `${endpointUrl}/tasks`,
        FETCH: `${endpointUrl}/list/tasks/:id`,
        DELETE: `${endpointUrl}/tasks/:id`,
        GET: `${endpointUrl}/tasks/:id`,
        MODIFY: `${endpointUrl}/tasks/:id`,
    }
};

export default endpoints;