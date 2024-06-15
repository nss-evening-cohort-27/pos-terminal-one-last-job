import domBuilder from '../shared/domBuilder';
import navBar from '../shared/navBar';
import logoutButton from '../components/logoutButton';
import landingPage from '../pages/landingPage';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';

const startApp = () => {
  domBuilder();
  domEvents();
  formEvents();
  landingPage();
  navBar();
  navigationEvents();
  logoutButton();
};

export default startApp;
