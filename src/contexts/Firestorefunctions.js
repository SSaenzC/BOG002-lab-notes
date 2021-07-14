import { db } from '../firebase';

export const addNote = async (dataNotes) => {
  await db.collection('notes').doc().set(dataNotes);
};
