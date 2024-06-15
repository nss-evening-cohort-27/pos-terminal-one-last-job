import { getSingleOrder } from './orderData';
import { getSingleItem } from './itemData';

const getItemsByOrder = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleItem(firebaseKey).then((itemObject) => {
    getSingleOrder(itemObject.order_id)
      .then((orderObject) => resolve({ ...itemObject, orderObject }));
  }).catch(reject);
});

export default getItemsByOrder;
