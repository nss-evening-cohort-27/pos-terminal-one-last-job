import firebase from 'firebase/app';
import 'firebase/auth';
import startApp from './startApp';
import logoutButton from '../components/logoutButton';
import client from './client';
import welcomePage from '../pages/loginPage';

const ViewDirectorBasedOnUserAuthStatus = () => {
  firebase.initializeApp(client);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      startApp();
      logoutButton();
    } else {
      // person is NOT logged in
      welcomePage();
    }
  });
};

export default ViewDirectorBasedOnUserAuthStatus;
