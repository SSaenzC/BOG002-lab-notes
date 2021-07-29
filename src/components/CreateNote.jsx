import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { addNote } from '../contexts/Firestorefunctions';

export default function CreateNote(propiedades) {
  const user = propiedades.user;
  const initialStateValues = {
    title: '',
    note: '',
  };

  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values, [name]: value, user: user.email,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(values);
    setValues({ ...initialStateValues });
    toast('New note added', {
      type: 'success',
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
          type="text"
          name="title"
          onChange={handleInputChange}
          value={values.title}
          required/>
        </label>
        <div>
          <textarea
            placeholder="Type your note here"
            rows="3"
            name="note"
            onChange={handleInputChange}
            value={values.note}
            required
          ></textarea>
        </div>
        <div>
          <button>Save</button>
        </div>
      </form>
    </>
  );
}
