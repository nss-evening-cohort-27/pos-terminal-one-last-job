import domBuilder from '../shared/domBuilder';
import navBar from '../shared/navBar';
import logoutButton from '../components/logoutButton';

const startApp = () => {
  domBuilder();
  // domEvents(user);
  // formEvents(user);
  navBar();
  // navigationEvents(user);
  logoutButton();
};

export default startApp;
