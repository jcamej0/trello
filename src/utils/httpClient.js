import httpEncodeFormData from "./httpEncodeFormData";

const get = (url, token, urlParams) => {
  url = urlParams ? url.replace(":id", urlParams) : url;

  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      AUTHORIZATION: `Bearer ${token}`
    }
  });
};

const post = (url, token, bodyParams) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      AUTHORIZATION: `Bearer ${token}`
    },
    body: bodyParams ? httpEncodeFormData(bodyParams) : null
  });
};

const put = (url, token, bodyParams, urlParams) => {
  url = urlParams ? url.replace(":id", urlParams) : url;

  return fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      AUTHORIZATION: `Bearer ${token}`
    },
    body: bodyParams ? httpEncodeFormData(bodyParams) : null
  });
};

const destroy = (url, token, urlParams) => {
  url = urlParams ? url.replace(":id", urlParams) : url;

  return fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      AUTHORIZATION: `Bearer ${token}`
    }
  });
};

const httpClient = {
  get,
  post,
	put,
	destroy
};
export default httpClient;
