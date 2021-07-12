import React from 'react';

export default function Note() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Title: <input type="text"/></label>
            <div>
                <input type="textarea" placeholder="Type your note here"/>
            </div>
            <div>
                <button>Save</button>
            </div>
        </form>
    </div>
  );
}
