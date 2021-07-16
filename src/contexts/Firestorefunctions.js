import { db } from '../firebase';

export const addNote = async (dataNotes) => {
  await db.collection('notes').doc().set(dataNotes);
};

export const getNotes = async () => {
  db.collection('notes').onSnapshot((querySnapshot) => {
    const data = [];
    querySnapshot.forEach((doc) => {
      // console.log(doc.data(), doc.id);
      data.push({ ...doc.data(), id: doc.id });
    });
    console.log(data);
    return data;
  });
};
