import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getNotes, deleteNote } from '../contexts/Firestorefunctions';
import { useAuth } from '../contexts/AuthContext.jsx';
import CreateNote from './CreateNote.jsx';
import EditNote from './EditNote.jsx';
import './Dashboard.css';

export default function Dashboard() {
  const { currentUser, logOut } = useAuth();
  const history = useHistory();
  const [notes, setNote] = useState([]);
  const [edit, setEdit] = useState(false);
  const [noteEdit, setnoteEdit] = useState({});

  function handleLogOut() {
    logOut();
    history.push('/login');
  }

  useEffect(() => {
    getNotes(setNote);
  }, []);

  const editingNote = (note) => {
    setEdit(true);
    setnoteEdit(note);
  };

  return (
    <div>
      <section className="header">
        <section>
          <strong>Welcome </strong>
          {currentUser.displayName}
        </section>
        <button variant="link" onClick={handleLogOut} className="logOutButton">
          Log Out
        </button>
      </section>
      <section className="noteArea">
        {
          edit ? (
          <section>
            <EditNote edintingNote={noteEdit}></EditNote>
          </section>
          ) : (
          <section>
              <CreateNote user={currentUser} />
          </section>
          )
        }
      </section>
      <section>
        {notes.map((note) => (
          <div key={note.id}>
            <div>
              <i className="material-icons" onClick={() => deleteNote(note.id)}>
                delete
              </i>
              <i className="material-icons" onClick={() => editingNote(note)}
              >edit</i>
            </div>
            <h4>{note.title}</h4>
            <p>{note.note}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
