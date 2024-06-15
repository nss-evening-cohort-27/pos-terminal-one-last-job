import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';

// create item form
const addItemForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-item--${obj.firebaseKey}` : 'submit-item'}" class="mb-4">
      <div class="form-group">
        <label for="item_name">Item Name</label>
        <input type="text" class="form-control" id="item_name" aria-describedby="item_name" placeholder="Enter item Name" value="${obj.item_name || ''}" required>
      </div>
      <div class="form-group">
        <label for="price">Item Price</label>
        <input type="email" class="form-control" id="price" aria-describedby="item_price" placeholder="Whats the Price?" value="${obj.price || ''}" required>
      </div>
      <button type="submit" class="btn btn-primary">Add/Edit item
      </button>
    </form>`;

  renderToDom('#form-container', domString);
};

export default addItemForm;
