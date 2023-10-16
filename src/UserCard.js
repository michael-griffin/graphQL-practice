import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';

function UserCard() {

  const { username } = useParams();

  console.log("What is user", username);
  const GET_MESSAGES = gql`
  query GetMessages {
    user (username: "${username}") {
      username
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
      <h2>Messages: </h2>
      {data.user.messages.map(message => (
        <p>{message.body}</p>
      ))}
    </div>
  );
}

export default UserCard;


// const {username, first_name, last_name} = user;