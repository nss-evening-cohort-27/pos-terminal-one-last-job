import firebase from 'firebase/app';
import 'firebase/auth';

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const signOut = () => {
  firebase.auth().signOut();
};

const getLoggedInUserName = () => {
  const user = firebase.auth().currentUser;

  if (user) {
    return user.displayName || 'Guest';
  }

  return 'Guest';
};

export { signIn, signOut, getLoggedInUserName };
