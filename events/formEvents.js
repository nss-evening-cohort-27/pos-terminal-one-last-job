import { createOrder, getOrder, updateOrder } from '../api/orderData';
import { showOrderCards } from '../pages/orders';

const formEvents = () => {
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit')) {
      const payload = {
        order_name: document.querySelector('#order_name').value,
        phone_number: document.querySelector('#phone_number').value,
        email: document.querySelector('#email').value,
        order_type: document.querySelector('#order_type').value,
      };
      createOrder(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateOrder(patchPayload).then(() => {
          getOrder().then((order) => showOrderCards(order));
        });
      });
    }
    //  CLICK EVENT FOR EDITING A order
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
        getOrder().then((order) => showOrderCards(order));
      });
    }
  });
};
export default formEvents;
