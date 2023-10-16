import { Routes, Route, Navigate } from "react-router-dom";

import DisplayUsers from './DisplayUsers';
import UserCard from './UserCard';
import AddUser from "./AddUser";
import AddMessage from "./AddMessage";
import Homepage from "./Homepage";


function RoutesList() {

  return (
    <Routes>
      <Route path="/users" element={<DisplayUsers />} />
      <Route path="/users/:username" element={<UserCard />} />
      <Route path="/users/:username/addmessage" element={<AddMessage />} />
      <Route path="/users/add" element={<AddUser />} />
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
}


export default RoutesList;