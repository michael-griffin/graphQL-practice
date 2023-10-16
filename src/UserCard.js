import { useQuery, gql } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';

function UserCard() {

  const { username } = useParams();

  console.log("What is user", username);
  const GET_MESSAGES = gql`
  query GetMessages {
    user (username: "${username}") {
      username
      first_name
      last_name
      messages {
        body
      }
    }
  }
  `;


  const { loading, error, data } = useQuery(GET_MESSAGES);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <div className="UserCard">
      <h1>User: {username}</h1>
      <h4>First name: {data.user.first_name}</h4>
      <h4>Last name: {data.user.last_name}</h4>
      <h2>Messages: </h2>
      <Link to={`/users/${username}/addmessage`}>Add a Message</Link>
      {data.user.messages.map(message => (
        <p>{message.body}</p>
      ))}
    </div>
  );
}

export default UserCard;


// const {username, first_name, last_name} = user;