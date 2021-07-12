import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoutButton from "./auth/LogoutButton";
import "./navBar.css";
const NavBar = () => {
  const user = useSelector((state) => state.session.user);

  return (
    <div className="navContainer">
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact={true} activeClassName="active">
              Home
            </NavLink>
          </li>
          {!user && (
            <li>
              <NavLink to="/login" exact={true} activeClassName="active">
                Login
              </NavLink>
            </li>
          )}
          {!user && (
            <li>
              <NavLink to="/sign-up" exact={true} activeClassName="active">
                Sign Up
              </NavLink>
            </li>
          )}

          {user && (
            <li>
              <NavLink to="/myProfile">Profile</NavLink>
            </li>
          )}
          {user && (
            <li>
              <NavLink to="/characters/create">Create</NavLink>
            </li>)}
            {user && (

              <LogoutButton />

          )}

        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
