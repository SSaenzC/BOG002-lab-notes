import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { getNotes, deleteNote } from '../contexts/Firestorefunctions';
import CreateNote from './CreateNote';
import './Dashboard.css';

export default function Dashboard() {
  const { currentUser, logOut } = useAuth();
  const history = useHistory();
  const [notes, setNote] = useState([]);

  function handleLogOut() {
    logOut();
    history.push('/login');
  }

  useEffect(() => {
    getNotes(setNote);
  }, []);

  console.log(notes);
  return (
    <div>
      <section className="header">
        <section>
          <strong>Welcome </strong>
          {currentUser.email}
        </section>
        <button variant="link" onClick={handleLogOut} className="logOutButton">
          Log Out
        </button>
      </section>
      <section className="noteArea">
        < CreateNote user={currentUser}/>
      </section>
      <section>
        {
          notes.map((note) => (<div key={note.id}>
            <div>
              <i
              className="material-icons"
              onClick={() => deleteNote(note.id)}
              >delete</i>
              <i
              className="material-icons">edit</i>
            </div>
              <h4>{note.title}</h4>
              <p>{note.note}</p>
            </div>))
        }
      </section>

    </div>
  );
}
