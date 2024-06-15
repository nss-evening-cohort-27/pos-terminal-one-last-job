import domBuilder from '../shared/domBuilder';
import navBar from '../shared/navBar';
import logoutButton from '../components/logoutButton';
import landingPage from '../pages/landingPage';
import domEvents from '../events/domEvents';
import navigationEvents from '../events/navigationEvents';

const startApp = () => {
  domBuilder();
  domEvents();
  // formEvents(user);
  landingPage();
  navBar();
  navigationEvents();
  logoutButton();
};

export default startApp;
