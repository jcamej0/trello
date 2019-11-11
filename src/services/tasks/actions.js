import endpoints from "../endpoints";
import httpClient from "../../utils";

const actions = {
  fetch: async (store, lists) => {
    const authToken = store.state.auth.authToken;
    const listsArraysOfId = lists.map(({ id }) => id).filter(id => id);
    await listsArraysOfId.forEach(async listId => {
      try {
        const response = await httpClient.get(
          endpoints.TASKS.FETCH,
          authToken,
          listId
        );
        const tasks = await response.json();

        if (tasks) {
          store.setState({
            tasks: {
              tasks: { ...store.state.tasks.tasks, [listId]: tasks }
            }
          });
        }
      } catch (err) {
							return false;
      }
    });

    return true;
  },
  add: async (store, idlist, task) => {
    const authToken = store.state.auth.authToken;
    const params = {
      idlist,
      task
    };
    const filteredTasksByListId = store.state.tasks.tasks[idlist];
    try {
      const response = await httpClient.post(
        endpoints.TASKS.ADD,
        authToken,
        params
      );
      const createdTask = await response.json();
      const newTask = filteredTasksByListId
        ? [...store.state.tasks.tasks[idlist], createdTask]
        : [createdTask];
      store.setState({
        tasks: {
          tasks: {
            ...store.state.tasks.tasks,
            [idlist]: newTask
          }
        }
      });

      return true;
    } catch (err) {
       return false;
    }
  },
  modify: async (store, idTask, idList, task) => {
    const authToken = store.state.auth.authToken;
    const taskList = store.state.tasks.tasks;
    const taskListFiltered = taskList[idList];
    const indexOfElement = taskListFiltered.findIndex(
      element => element.id === idTask
    );
    try {
      const response = await httpClient.put(
        endpoints.TASKS.MODIFY,
        authToken,
        { task },
        idTask
      );
      const modifyTask = await response.json();
      store.setState({
        tasks: {
          tasks: {
            ...store.state.tasks.tasks,
            [idList]: [
              ...store.state.tasks.tasks[idList],
              (store.state.tasks.tasks[idList][indexOfElement].task = task)
            ]
          }
        }
      });
      return true;
    } catch (err) {
       return false;
    }
  }
};

export default actions;
