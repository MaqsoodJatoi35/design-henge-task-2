import React from "react";
import { NavLink } from "react-router-dom";

import "./style.css";

const Header = (props) => {
  return (
    <header className="row text-dark">
      <div className="col-12 ">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div
            className="collapse navbar-collapse d-flex justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to={"/"}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"/add"}>
                  Add Todo
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default React.memo(Header);
