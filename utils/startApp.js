import domBuilder from '../shared/domBuilder';
import navBar from '../shared/navBar';
import logoutButton from '../components/logoutButton';
import landingPage from '../pages/landingPage';

const startApp = () => {
  domBuilder();
  // domEvents(user);
  // formEvents(user);
  navBar();
  // navigationEvents(user);
  logoutButton();
  landingPage();
};

export default startApp;
