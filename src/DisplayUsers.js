import React from "react";
import { useQuery, gql } from '@apollo/client';


const GET_USERS = gql`
  query User {
    username
  }
`;

function DisplayUsers() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <div className="DisplayUsers">
      {data.users.map(user => (
        <div>
          <h3>{user.username}</h3>
        </div>
      ))}
    </div>
  );

};

export default DisplayUsers;