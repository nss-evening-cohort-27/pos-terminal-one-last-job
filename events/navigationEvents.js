import addOrderForm from '../components/forms/addOrderForm';
import landingPage from '../pages/landingPage';
import { getOrder } from '../api/orderData';
import { showOrderCards } from '../pages/orders';

const navigationEvents = () => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    // Click event for logo to take you back to the landing page
    if (e.target.id.includes('navbar-logo')) {
      landingPage();
    }

    // Click event for View Orders button to show all orders
    if (e.target.id.includes('view-orders')) {
      getOrder().then(showOrderCards);
    }

    // Click event for Create an Order button to show create order form
    if (e.target.id.includes('createAnOrder')) {
      addOrderForm();
    }
  });
};

export default navigationEvents;
