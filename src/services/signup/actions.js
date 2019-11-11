import endpoints from "../endpoints";

const encodeFormData = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const register = async ({ username, password }) => {
  try {
    const response = await fetch(endpoints.ACCESS.REGISTER, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodeFormData({ username, password })
    });
    const userInfo = await response.json();
    return userInfo;
  } catch (err) {
    return err;
  }
};

const actions = {
  register
};

export default actions;
