import addOrderForm from '../components/forms/addOrderForm';
import landingPage from '../pages/landingPage';
import { getOrder, searchOrders } from '../api/orderData';
import { emptyOrderCards, showOrderCards } from '../pages/orders';

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

  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = e.target.value.toLowerCase();

    searchOrders(searchValue).then((filteredOrders) => {
      if (filteredOrders.length === 0) {
        emptyOrderCards();
      } else {
        showOrderCards(filteredOrders);
      }
    });
  });
};

export default navigationEvents;
