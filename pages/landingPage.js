import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';
import { getLoggedInUserName } from '../utils/auth';

const landingPage = () => {
  clearDom();

  const userName = getLoggedInUserName();

  const domString = `
    <div id="landing-page-container">
      <div id="landing-page-welcome-message">Welcome, ${userName}!</div>
      <div id="landing-page-button-container">
        <button class="landing-page-btn" id="landing-page-view-orders-btn">View Orders</button>
        <button class="landing-page-btn" id="landing-page-create-an-order-btn">Create an Order</button>
        <button class="landing-page-btn" id="landing-page-view-revenue-btn">View Revenue</button>
      </div>
    </div>
    `;
  renderToDom('#main-container', domString);
};

export default landingPage;
