import React, { useState } from 'react';
import { addNote } from '../contexts/Firestorefunctions';

// eslint-disable-next-line react/prop-types
export default function Note({ user }) {
  const initialStateValues = {
    title: '',
    note: '',
  };

  const [values, setValues] = useState(initialStateValues);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // eslint-disable-next-line react/prop-types
    setValues({ ...values, [name]: value, user: user.email });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line react/prop-types
    console.log(values);
    addNote(values);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Title: <input type="text" name="title" onChange={handleInputChange} />
        </label>
        <div>
          <textarea
            placeholder="Type your note here"
            rows="3"
            name="note"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div>
          <button>Save</button>
        </div>
      </form>
    </>
  );
}
