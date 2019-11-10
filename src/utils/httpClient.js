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

const post = (url, token, params) => {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      AUTHORIZATION: `Bearer ${token}`
    },
    body: params ? httpEncodeFormData(params) : null
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

const httpClient = {
  get,
  post,
  put
};
export default httpClient;
