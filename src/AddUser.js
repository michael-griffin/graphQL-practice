import React, { useState } from "react";
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from "react-router-dom";

function AddUser() {
  const initialData = {
    username: "",
    firstName: "",
    lastName: ""
  };
  const [formData, setFormData] = useState(initialData);

  const ADD_USER = gql`
  mutation AddUser {
    createUser(username:"${formData.username}",
                first_name:"${formData.firstName}",
                last_name:"${formData.lastName}" ){
                  username
                  first_name
                  last_name
                }
  }
  `;
  const [addUser, { loading, error, data }] = useMutation(ADD_USER);
  const navigate = useNavigate();

  function handleChange(evt) {
    const { name, value } = evt.target;

    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    addUser();
    navigate("/users");
  }

  if (loading) return <p>Submitting...</p>;
  if (error) return <p>Submission Error: {error.message}</p>;

  return (
    <div>
      <form className="AddUser" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            required
            onChange={handleChange}
            value={formData.username}
            name="username"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            required
            onChange={handleChange}
            value={formData.firstName}
            name="firstName"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            required
            onChange={handleChange}
            value={formData.lastName}
            name="lastName"
            type="text"
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );

}

export default AddUser;