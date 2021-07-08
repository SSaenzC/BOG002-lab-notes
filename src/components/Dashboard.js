import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Dashboard() {
  const { currentUser, logOut } = useAuth();
  const history = useHistory();

  function handleLogOut() {
    logOut();
    history.push('/login');
  }
  return (
        <div>
          <h2>Profile</h2>
          <strong>Email: </strong>{currentUser.email}
           <button variant='link' onClick={handleLogOut}>Log Out</button>
        </div>
  );
}
