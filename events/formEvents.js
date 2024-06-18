import {
  createItem, filterItemsByOrderId, getSingleItem, updateItem
} from '../api/itemData';
import { createOrder, getOrder, updateOrder } from '../api/orderData';
import { showItemCards } from '../pages/items';
import { showOrderCards } from '../pages/orders';

const formEvents = () => {
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // CLICK EVENT FOR SUBMITTING AN ORDER
    if (e.target.id.includes('submit-order')) {
      const payload = {
        order_name: document.querySelector('#order_name').value,
        phone_number: document.querySelector('#phone_number').value,
        email_address: document.querySelector('#email').value,
        order_type: document.querySelector('#order_type').value,
        closed: false,
      };
      createOrder(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateOrder(patchPayload).then(() => {
          getOrder().then((order) => showOrderCards(order));
        });
      });
    }
    //  CLICK EVENT FOR EDITING AN ORDER
    if (e.target.id.includes('update-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        order_name: document.querySelector('#order_name').value,
        phone_number: document.querySelector('#phone_number').value,
        email: document.querySelector('#email').value,
        order_type: document.querySelector('#order_type').value,
        firebaseKey,
      };

      updateOrder(payload).then(() => {
        // getOrder().then((order) => showOrderCards(order));
        getOrder().then(showOrderCards);
      });
    }

    // CLICK EVENT FOR ADDING AN ITEM
    if (e.target.id.includes('add-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        item_name: document.querySelector('#item_name').value,
        price: document.querySelector('#price').value,
      };
      createItem(payload).then(({ name }) => {
        const patchPayload = { order_id: firebaseKey, firebaseKey: name };

        updateItem(patchPayload).then(() => {
          filterItemsByOrderId(firebaseKey).then(showItemCards);
        });
      });
    }

    // CLICK EVENT FOR EDITING / UPDATING AN ITEM
    if (e.target.id.includes('update-item')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleItem(firebaseKey).then((item) => {
        const payload = {
          item_name: document.querySelector('#item_name').value,
          price: document.querySelector('#price').value,
          order_id: item.order_id,
          firebaseKey: item.firebaseKey
        };
        updateItem(payload).then(() => {
          filterItemsByOrderId(payload.order_id).then(showItemCards);
        });
      });
    }
  });
};
export default formEvents;
