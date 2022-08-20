import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <h1>Book Management App</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          {/** exact is used to exactly match the url */}
          {/** we are using NavLink instead of <a/> so that page does not refresh when the user clicks on any of the links */}
          Books List
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add Book
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
