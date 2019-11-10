import endpoints from "../endpoints";
import httpClient from "../../utils";
import tasks from "../tasks";

const actions = {
  fetch: async store => {
    const authToken = store.state.auth.authToken;
    store.setState({
      lists: {
        fetching: true,
        lists: [store.state.lists.lists]
      }
    });
    try {
      const response = await httpClient.get(endpoints.LISTS.FETCH, authToken);
      const lists = await response.json();

      store.setState({
        lists: {
          lists: [store.state.lists.lists, ...lists]
        }
      });

      const tasksByList = await tasks.actions.fetch(store);

      return true;
    } catch (err) {
      console.log("err", err);
    }
  }
};

export default actions;
