import { deleteItem, filterItemsByOrderId, getSingleItem } from '../api/itemData';
import deleteOrderItemsRelationship from '../api/mergedData';
// import getItemsByOrder from '../api/mergedData';
import { getOrder, getSingleOrder } from '../api/orderData';
import { addItemForm, updateItemForm } from '../components/forms/addItemForm';
import addOrderForm from '../components/forms/addOrderForm';
import paymentForm from '../components/forms/paymentForm';
import { emptyItemCards, showItemCards } from '../pages/items';
import { emptyOrderCards, showOrderCards } from '../pages/orders';
import revenuePage from '../pages/revenuePage';

const domEvents = () => {
  // LANDING PAGE EVENTS
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR CREATE AN ORDER BUTTON ON LANDING PAGE
    if (e.target.id.includes('landing-page-create-an-order-btn')) {
      addOrderForm();
    }

    // CLICK EVENT FOR VIEW ORDERS BUTTON ON LANDING PAGE
    if (e.target.id.includes('landing-page-view-orders-btn')) {
      getOrder().then((orders) => {
        showOrderCards(orders);
      }).catch(() => {
        emptyOrderCards();
      });
    }

    // CLICK EVENT FOR VIEW REVENUE BUTTON ON LANDING PAGE
    if (e.target.id.includes('landing-page-view-revenue-btn')) {
      revenuePage();
    }
  });

  // CARD EVENTS
  document.querySelector('#orderCards').addEventListener('click', (e) => {
    // CLICK EVENT FOR DETAILS BUTTON TO VIEW ORDER DETAILS
    if (e.target.id.includes('view-order-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      filterItemsByOrderId(firebaseKey).then((item) => {
        if (item.length < 1) {
          emptyItemCards(firebaseKey);
        } else {
          showItemCards(item, firebaseKey);
        }
      });
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
        deleteOrderItemsRelationship(firebaseKey).then(() => {
          getOrder().then((orders) => {
            showOrderCards(orders);
          }).catch(() => {
            emptyOrderCards();
          });
        });
      }
    }

    // CLICK EVENT FOR EDIT ITEM BUTTON TO SHOW ITEM FORM
    if (e.target.id.includes('edit-item-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleItem(firebaseKey).then((item) => {
        updateItemForm(item);
      });
    }

    // CLICK EVENT FOR ADD ITEM BUTTON TO SHOW ITEM FORM
    if (e.target.id.includes('add-item-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      addItemForm(firebaseKey);
    }

    // CLICK EVENT FOR DELETE ITEM BUTTON TO DELETE ITEM
    if (e.target.id.includes('delete-item-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleItem(firebaseKey).then((item) => {
        deleteItem(firebaseKey).then(() => {
          filterItemsByOrderId(item.order_id).then((items) => {
            if (items.length < 1) {
              emptyItemCards(item.order_id);
            } else {
              showItemCards(items, item.order_id);
            }
          });
        });
      });
    }
  });
};

export default domEvents;
