import { Routes, Route, Navigate } from "react-router-dom";

import DisplayUsers from './DisplayUsers';
import UserCard from './UserCard';


function RoutesList() {

  return (
    <Routes>
      <Route path="/users" element={<DisplayUsers />} />
      <Route path="/users/:username" element={<UserCard />} />
    </Routes>
  );
}


export default RoutesList;