import { getOrder } from '../api/orderData';
import addOrderForm from '../components/forms/addOrderForm';
import { showOrderCards } from '../pages/orders';

const domEvents = () => {
  // landing page events
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('landing-page-create-an-order-btn')) {
      addOrderForm();
    }

    if (e.target.id.includes('landing-page-view-orders-btn')) {
      getOrder().then(showOrderCards);
    }
  });
};

export default domEvents;
