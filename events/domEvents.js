import { filterItemByOrderId } from '../api/itemData';
// import getItemsByOrder from '../api/mergedData';
import { deleteOrder, getOrder, getSingleOrder } from '../api/orderData';
import addOrderForm from '../components/forms/addOrderForm';
import paymentForm from '../components/forms/paymentForm';
import { emptyItemCards, showItemCards } from '../pages/items';
import { showOrderCards } from '../pages/orders';

const domEvents = () => {
  // LANDING PAGE EVENTS
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR CREATE AN ORDER BUTTON ON LANDING PAGE
    if (e.target.id.includes('landing-page-create-an-order-btn')) {
      addOrderForm();
    }

    // CLICK EVENT FOR VIEW ORDERS BUTTON ON LANDING PAGE
    if (e.target.id.includes('landing-page-view-orders-btn')) {
      getOrder().then(showOrderCards);
    }
  });

  // CARD EVENTS
  document.querySelector('#orderCards').addEventListener('click', (e) => {
    // CLICK EVENT FOR DETAILS BUTTON TO VIEW ORDER DETAILS
    if (e.target.id.includes('view-order-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      // getItemsByOrder(firebaseKey).then(showItemCards);
      // filterItemByOrderId(firebaseKey).then(showItemCards);
      filterItemByOrderId(firebaseKey).then((item) => {
        if (item.order_id === null || item.order_id === undefined) {
          emptyItemCards(firebaseKey);
        } else {
          showItemCards(item);
        }
      });
      console.warn(firebaseKey);
    }

    // CLICK EVENT FOR EDIT BUTTON TO EDIT ORDER
    if (e.target.id.includes('edit-order-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((orderObj) => addOrderForm(orderObj));
      getSingleOrder(firebaseKey).then(addOrderForm);
    }
    if (e.target.id.includes('go-to-payment-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((orderObj) => paymentForm(orderObj));
      getSingleOrder(firebaseKey).then(paymentForm);
    }

    // CLICK EVENT FOR DELETE BUTTON TO DELETE ORDER
    if (e.target.id.includes('delete-order-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE ORDER', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');
        deleteOrder(firebaseKey).then(() => {
          getOrder().then(showOrderCards);
        });
      }
    }
  });
};

export default domEvents;
