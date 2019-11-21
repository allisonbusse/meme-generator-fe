import React, { useState } from 'react';
import PropTypes from 'prop-types';

const UserForm = ({ handleSubmit, buttonLabel }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form onSubmit={event => handleSubmit(event, username, password)}>
      <input type='text' value={username} onChange={({ target }) => setUsername(target.value)} />;
      <input type='password' value={password} onChange={({ target }) => setPassword(target.value)} />;
      <button>{buttonLabel}</button>
    </form>
  );
};

UserForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  buttonLabel: PropTypes.string.isRequired
};

export default UserForm; 

