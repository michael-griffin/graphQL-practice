import { useState } from "react";
import { useMutation, gql } from '@apollo/client';
import { useParams, useNavigate } from 'react-router-dom';

function AddMessage() {

  const initialData = {
    body: "",
  };
  const [formData, setFormData] = useState(initialData);

  const { username } = useParams();


  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  }

  const navigate = useNavigate();
  function handleSubmit(evt) {
    evt.preventDefault();
    addMessage();
    navigate(`/users/${username}`);
  }


  const ADD_MESSAGE = gql`
  mutation AddMessage {
    createMessage(username:"${username}",
                body:"${formData.body}"){
                  id
                  body
                  user {
                    first_name
                    last_name
                  }
                }
  }
  `;
  const [addMessage, { loading, error, data }] = useMutation(ADD_MESSAGE);

  if (loading) return <p>Submitting...</p>;
  if (error) return <p>Submission Error: {error.message}</p>;


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="body">Body</label>
      <textarea
        onChange={handleChange}
        name="body"
      />
      <button>submit</button>
    </form>
  );

}


export default AddMessage;