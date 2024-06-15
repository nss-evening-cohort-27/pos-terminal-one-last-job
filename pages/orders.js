import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const emptyOrderCards = () => {
  const domString = 'No Orders';
  renderToDom('#orderCards', domString);
};

const showOrderCards = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card">
      <div class="card-body">
        <h3 class="card-order-name">${item.order_name}</h3>
      </div>
    </div>
    `;
  });
  renderToDom('#orderCards', domString);
};

export { emptyOrderCards, showOrderCards };
