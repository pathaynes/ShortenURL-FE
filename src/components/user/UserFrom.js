import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getSessionId } from '../../selectors/sessionSelectors';
import styles from './UserForm.css';

const UserForm = ({ handleSubmit }) => {
  const sessionId = useSelector(getSessionId);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  if(sessionId) return <Redirect to="/" />;

  return (
    <section className={styles.UserForm}>
      <form onSubmit={event => handleSubmit(event, username, password)}>
        <input type="text" placeholder="username" value={username} onChange={({ target }) => setUsername(target.value)} />
        <input type="password" placeholder="password" value={password} onChange={({ target }) => setPassword(target.value)} />
      </form>
      <button>submit</button>
    </section>
  );
};

UserForm.propTypes = {
  buttonText: PropTypes.string,
  handleSubmit: PropTypes.func
};

export default UserForm;
