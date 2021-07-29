import React from 'react';

export default function EditNote() {
  return (
    <>
        <form>
            <label>
                Title:
                <input
                type="text"
                name="title"
                required/>
            </label>
            <div>
                <textarea
                    placeholder="Type your note here"
                    rows="3"
                    name="note"
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
