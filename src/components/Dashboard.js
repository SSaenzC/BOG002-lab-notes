import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Note from './Note';

export default function Dashboard() {
  const { currentUser, logOut } = useAuth();
  const history = useHistory();

  function handleLogOut() {
    logOut();
    history.push('/signup');
  }

  return (
    <div>
      <h2>Profile</h2>
      <strong>Welcome </strong>
      {currentUser.email}
      <button variant="link" onClick={handleLogOut}>
        Log Out
      </button>
      <Note user={currentUser} />
    </div>
  );
}
