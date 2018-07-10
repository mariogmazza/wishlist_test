import { db } from './firebase';
import trim from 'trim';

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
    role:'client'
  });

export const onceGetUsers = () =>
db.ref('users').once('value');


// goes to the data base and grabs the user values
export const onceGetIndividualUser = (userId) =>
db.ref(`users/${userId}`).once('value');


export const onceGetMessageData = () =>
db.ref('messages');

export const pushMessageData = (targetValue) =>
db.ref('messages').push({
  message: trim(targetValue)
});



