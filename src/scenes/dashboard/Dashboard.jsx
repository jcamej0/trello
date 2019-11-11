import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import useGlobalState from "../../state";
import Lists from "./components";
import { NewList } from "./components";
import { ReactComponent as Logout } from "../../ui-library/svg/logout.svg";
import Spinner from "../../ui-library/loading-spinner";
import theme from "./theme.module.scss";

const Dashboard = () => {
  const [globalState, globalActions] = useGlobalState();
  const {
    lists: { lists, fetching },
    auth: { authenticated }
  } = globalState;

  const {
    lists: { fetch, create },
    auth: { logout }
  } = globalActions;

  useEffect(() => {
    fetch();
  }, []);

  const handleLogout = () => {
    logout();
  };

  return (
    <React.Fragment>
      {fetching && <Spinner opaque />}
      <div className={theme.container}>
        <nav className={`${theme.navbar} ${theme.app}`}>
          <span>Trello</span>
          <div onClick={handleLogout} className={theme.logout}>
            <Logout />
          </div>
        </nav>
        <div className={theme["list-container"]}>
          {lists &&
            lists.map((list, index) => {
              return <Lists id={list.id} key={index} name={list.name} />;
            })}

          <NewList handleCreateList={create} />
        </div>
      </div>
      {!authenticated && <Redirect to="/" />}}
    </React.Fragment>
  );
};

export default Dashboard;
