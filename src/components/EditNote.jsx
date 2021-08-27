import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { updateNote } from '../contexts/Firestorefunctions';

export default function EditNote(propiedades) {
  const noteStatus = propiedades.edintingNote;
  const idNoteStatus = noteStatus.id;

  const [modifiedValue, setModifiedValue] = useState(noteStatus);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setModifiedValue({ ...modifiedValue, [name]: value });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    updateNote(idNoteStatus, modifiedValue);
    toast('The note was edited', {
      type: 'info',
    });
  };

  return (
    <>
        <h2>Edit Note</h2>
        <form onSubmit={handleEdit}>
            <label>
                Title:
                <input
                type="text"
                name="title"
                onChange={handleInputChange}
                value={modifiedValue.title}
                required/>
            </label>
            <div>
                <textarea
                    placeholder="Type your note here"
                    rows="3"
                    name="note"
                    onChange={handleInputChange}
                    value={modifiedValue.note}
                required
                ></textarea>
            </div>
            <div>
                <button>Edit</button>
            </div>
        </form>
    </>
  );
}
