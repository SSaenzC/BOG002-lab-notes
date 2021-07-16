import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Note from './Note';
import './Dashboard.css';

export default function Dashboard() {
  const { currentUser, logOut } = useAuth();
  const history = useHistory();

  function handleLogOut() {
    logOut();
    history.push('/login');
  }

  return (
    <div>
      <strong>Welcome </strong>
      {currentUser.email}
      <button variant="link" onClick={handleLogOut} className="logOutButton">
        Log Out
      </button>
      <section className="noteArea">
        <Note user={currentUser}/>
      </section>
    </div>
  );
}
