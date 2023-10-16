import React from "react";
import { Link } from "react-router-dom";
import DisplayUsers from "./DisplayUsers";
import AddUser from "./AddUser";

function Homepage() {
  return (
    <div className="Homepage">
      <Link to="/users">User List</Link>
      <Link to="/users/add">Add User</Link>
    </div>
  );
}

export default Homepage;