import { deleteItem } from './itemData';
import { deleteOrder, getOrderItems } from './orderData';

const deleteOrderItemsRelationship = (firebaseKey) => new Promise((resolve, reject) => {
  getOrderItems(firebaseKey).then((orderItemsArray) => {
    const deleteItemPromises = orderItemsArray.map((item) => deleteItem(item.firebaseKey));

    Promise.all(deleteItemPromises).then(() => {
      deleteOrder(firebaseKey).then(resolve);
    });
  })
    .catch(reject);
});

export default deleteOrderItemsRelationship;
