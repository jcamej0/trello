import React, { useState, useEffect } from "react";
import useGlobalState from "../../state";
import Lists from "./components";
import Spinner from "../../ui-library/loading-spinner";
import theme from "./theme.module.scss";

const Dashboard = () => {
  const [globalState, globalActions] = useGlobalState();
  const {
    lists: { lists, fetching }
  } = globalState;

  const {
    lists: { fetch }
  } = globalActions;

  useEffect(() => {
    fetch();
  }, []);
  return (
    <React.Fragment>
      {fetching && <Spinner opaque />}
      <div className={theme.container}>
        <nav className={`${theme.navbar} ${theme.app}`}>Trello</nav>
        <div className={theme['list-container']}>
            {lists &&
            lists.map(list => {
                return <Lists id={list.id} name={list.name} />;
            })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
