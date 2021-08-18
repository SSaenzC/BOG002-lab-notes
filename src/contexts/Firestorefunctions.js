import { toast } from 'react-toastify';
import { db } from '../firebase';

export const addNote = async (dataNotes) => {
  await db.collection('notes').doc().set(dataNotes);
  // const updateTimeStamp = docRef.update({
  //     timeStamp: db.FieldValue.serverTimestamp()
  // });
};

export const getNotes = async (changeStatus) => {
  db.collection('notes').onSnapshot((querySnapshot) => {
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ ...doc.data(), id: doc.id });
    });
    return changeStatus(data);
  });
};

export const deleteNote = async (id) => {
  // eslint-disable-next-line no-alert
  if (window.confirm('Do you want to delete this note?')) {
    await db.collection('notes').doc(id).delete();
    toast('Note deleted', {
      type: 'error',
    });
  }
};

export const updateNote = (id, updatedNote) => db.collection('notes').doc(id).update(updatedNote);
