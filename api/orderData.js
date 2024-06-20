import client from '../utils/client';

const endpoint = client.databaseURL;

const getOrder = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const deleteOrder = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json,'
    },
  })
    .then((response) => {
      if (response.ok) {
        resolve();
      } else {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject('Error deleting order');
      }
    })
    .catch(reject);
});

const createOrder = (paylod) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(paylod),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateOrder = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSingleOrder = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getClosedOrders = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders.json?orderBy="closed"&equalTo=true`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const searchOrders = (searchValue) => new Promise((resolve, reject) => {
  getOrder().then((orders) => {
    const filteredOrders = orders.filter((order) => order.order_name.toLowerCase().includes(searchValue.toLowerCase()));
    resolve(filteredOrders);
  })
    .catch(reject);
});

const getOrderItems = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/items.json?orderBy="order_id"&equalTo="${firebaseKey}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export {
  getOrder, deleteOrder, createOrder, updateOrder, getSingleOrder, searchOrders, getClosedOrders, getOrderItems
};
