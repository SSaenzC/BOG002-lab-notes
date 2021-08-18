import React from 'react';

export default function EditNote(propiedades) {
  const noteStatus = propiedades.edintingNote;
  console.log('Soy el console log de note status', noteStatus);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     updateNote(values);
  //     // toast('New note added', {
  //     //   type: 'success',
  //     // });
  //   };

  return (
    <>
        <h2>Edit Note</h2>
        <form>
            <label>
                Title:
                <input
                type="text"
                name="title"
                value={noteStatus.title}
                required/>
            </label>
            <div>
                <textarea
                    placeholder="Type your note here"
                    rows="3"
                    name="note"
                    value={noteStatus.note}
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
