import endpoints from "../endpoints";
import httpClient from "../../utils";
import tasks from "../tasks";

const actions = {
  fetch: async store => {
    const authToken = store.state.auth.authToken;
    store.setState({
      lists: {
        fetching: true,
        lists: []
      }
    });
    try {
      const response = await httpClient.get(endpoints.LISTS.FETCH, authToken);
      const lists = await response.json();
			await tasks.actions.fetch(store, lists);
			
      store.setState({
        lists: {
					fetching: false,
          lists: [...lists]
        }
      });


      return true;
    } catch (err) {
      return false;
    }
	},
	create: async (store, name) => {
		try {
			const authToken = store.state.auth.authToken;
			const response = await httpClient.post(endpoints.LISTS.CREATE, authToken, {name});
			const createList = await response.json();
	
			store.setState({
				lists: {
					lists: [...store.state.lists.lists, createList]
				}
			})
			return true;
		} catch(err) {
			return false;
		}

	},
	destroy: async (store, idList) => {
		const authToken = store.state.auth.authToken;
		const lists = store.state.lists.lists;
		const tasks = store.state.tasks.tasks;
		const tasksByList = tasks[idList];

		if(tasksByList) {
			try{
				const responseTasks = await httpClient.destroy(endpoints.TASKS.DELETE, authToken, idList);
				const responseList = await httpClient.destroy(endpoints.LISTS.DELETE, authToken, idList);
				await responseTasks.text();
			  await responseList.json();
			delete tasks[idList]
			const filteredLists = lists.filter(list => list.id !== idList);
			store.setState({
				tasks: {
					tasks: {
						...tasks
					}
				},
				lists: {
					lists: 
						filteredLists
					
				}
			})
				return true;
			} catch(err) {
				 return false;
			}
		} else {
			try {
				const responseList = await httpClient.destroy(endpoints.LISTS.DELETE, authToken, idList);
				await responseList.json();
				const filteredLists = lists.filter(list => list.id !== idList);
				store.setState({
					lists: {
						lists: 
							filteredLists
						
					}
				})
				return true;
			} catch(err) {

			}
			
		}

	},
	edit: async (store, name, idList) => {
		const authToken = store.state.auth.authToken;
		const lists = store.state.lists.lists;
		const filterListIndex = lists.findIndex(list => list.id === idList);

		try {
			const response = await httpClient.put(endpoints.LISTS.EDIT, authToken, {name}, idList);
			await response.json();

			store.setState({
				lists: {
					lists: [
						...store.state.lists.lists,
						store.state.lists.lists[filterListIndex]['name'] = name
					]
				}
			})

			return true;
		}catch(err) {
			 return false;
		}
	},
};

export default actions;
