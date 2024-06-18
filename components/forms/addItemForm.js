import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';

// ADD ITEM FORM
const addItemForm = (firebaseKey) => {
  clearDom();
  const domString = `
    <form id="add-item--${firebaseKey}" class="mb-4">
      <div class="form-group">
        <label for="item_name">Item Name</label>
        <input type="text" class="form-control" id="item_name" aria-describedby="item_name" placeholder="Enter item Name"}" required>
      </div>
      <div class="form-group">
        <label for="price">Item Price</label>
        <input type="number" min="0" step="0.01" class="form-control" id="price" aria-describedby="item_price" placeholder="Whats the Price?" required>
      </div>
      <button type="submit" class="btn btn-primary">Add item</button>
    </form>`;

  renderToDom('#form-container', domString);
};

// UPDATE ITEM FORM
const updateItemForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="update-item--${obj.firebaseKey}" class="mb-4">
      <div class="form-group">
        <label for="item_name">Item Name</label>
        <input type="text" class="form-control" id="item_name" aria-describedby="item_name" placeholder="Enter item Name" value="${obj.item_name}" required>
      </div>
      <div class="form-group">
        <label for="price">Item Price</label>
        <input type="number" min="0" step="0.01" class="form-control" id="price" aria-describedby="item_price" placeholder="Whats the Price?" value="${obj.price}" required>
      </div>
      <button type="submit" class="btn btn-primary">Edit item
      </button>
    </form>`;

  renderToDom('#form-container', domString);
};

export { addItemForm, updateItemForm };
