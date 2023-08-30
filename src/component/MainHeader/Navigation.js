import React, { useContext } from "react";
import classes from "./Navigation.module.css";
import AuthContext from "../../store/auth-context";
const Navigation = () => {
  const awt = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {awt.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {awt.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {awt.isLoggedIn && (
          <li>
            <button onClick={awt.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
