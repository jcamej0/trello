import React from "react";
import useGlobalHook from "./store";
import auth from "../services/auth";
import user from "../services/user";
import lists from "../services/lists";
import tasks from "../services/tasks";

const state = {
  auth: {
    ...auth.state
  },
  user: {
    ...user.state
  },
  lists: {
    ...lists.state
  },
  tasks: {
    ...tasks.state
  }
};

const actions = {
  auth: {
    ...auth.actions
  },
  user: {
    ...user.actions
  },
  lists: {
    ...lists.actions
  },
  tasks: {
    ...tasks.actions
  }
};

const useGlobalState = useGlobalHook(React, state, actions);

export default useGlobalState;
