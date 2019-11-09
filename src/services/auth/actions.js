import endpoints from "../endpoints";

const encodeFormData = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const actions = {
  login: async (store, { username, password }) => {
    try {
      const response = await fetch(endpoints.ACCESS.LOGIN, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData({ username, password })
      });

      const userAuthToken = await response.text();

      actions.setAuthToken(store, userAuthToken);
      return true;
    } catch (err) {
      return false;
    }
  },
  setAuthToken: (store, authToken) => {
    store.setState({
      auth: {
        authenticated: true,
        authToken: authToken
      }
    });
  }
};

export default actions;
