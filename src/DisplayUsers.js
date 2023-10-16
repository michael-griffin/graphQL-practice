import React from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from '@apollo/client';
import UserCard from "./UserCard";


function DisplayUsers() {
  const GET_USERS = gql`
  query GetUsers {
    users {
      username
      messages {
        body
      }
    }
  }
  `;

  const { loading, error, data } = useQuery(GET_USERS);


  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  console.log(data);

  return (
    <div className="DisplayUsers">
      {data.users.map(user => (
        <div>
          <span>{user.username}</span>
          <Link to={`/users/${user.username}`}> <p>Details</p> </Link>
        </div>
      ))}
    </div>
  );

};

export default DisplayUsers;