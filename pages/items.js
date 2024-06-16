import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const emptyItemCards = () => {
  const domString = `
  <h3 id="no-items-header">No Items</h3>
  <div id="item-page-button-container">
      <button class="btn" id="add-item-btn">Add Item</button>
      <button class="btn" id="go-to-payment-btn">Go To Payment</button>
    </div>
  `;
  renderToDom('#orderCards', domString);
};

const showItemCards = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card">
      <div class="card-body">
        <h3 class="card-title card-item-name">${item.item_name}</h3>
        <p class="card-text card-item-price">PRICE: $${item.price}</p>
        <i class="btn btn-info fas fa-edit" id="edit-item-btn--${item.firebaseKey}">Edit item</i>
          <i class="btn btn-danger fas fa-trash-alt" id="delete-item-btn--${item.firebaseKey}">Delete item</i>
      </div>
    </div>
    `;
  });

  domString += `
    <div id="item-page-button-container">
      <button class="btn" id="add-item-btn">Add Item</button>
      <button class="btn" id="go-to-payment-btn">Go To Payment</button>
    </div>
  `;

  renderToDom('#orderCards', domString);
};

export { emptyItemCards, showItemCards };
