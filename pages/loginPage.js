import loginButton from '../components/loginButton';
import renderToDOM from '../utils/renderToDom';
import logo from '../assets/logo.png';

const welcomePage = () => {
  document.querySelector('#app').innerHTML = '';
  const domString = `
    <div id=login-container>
    <div id="logo">
    <img src="${logo}" width=300>
    </div><br>
    <div id="login-button"><div>
    </div>

    `;
  renderToDOM('#app', domString);
  loginButton();
};

export default welcomePage;
