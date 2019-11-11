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
      if(userAuthToken) {
        actions.setAuthToken(store, userAuthToken);
        return true;
      } else {
          return false;
      }
    } catch (err) {
      return false;
    }
  },
  setAuthToken: (store, authToken) => {
    window.localStorage.setItem('authToken', authToken);
    store.setState({
      auth: {
        authenticated: true,
        authToken: authToken
      }
    });
  },
  logout: (store) => {
    window.localStorage.removeItem('authToken');
    store.setState({
        auth: {
          authenticated: false,
          authToken: null,
        }
      });
    window.location.href = "../";
  },
};

export default actions;
