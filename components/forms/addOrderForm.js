import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';

// create order form
const addOrderForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'}" class="mb-4">
      <div class="form-group">
        <label for="order_name">Order Name</label>
        <input type="text" class="form-control" id="order_name" aria-describedby="order_name" placeholder="Enter Order Name" value="${obj.order_name || ''}" required>
      </div>
      <div class="form-group">
        <label for="phone_number">Phone Number</label>
        <input type="tel" class="form-control" id="phone_number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" aria-describedby="phone_number" placeholder="Enter Phone Number" value="${obj.phone_number || ''}" required>
      </div>
      <div class="form-group">
        <label for="title">Email</label>
        <input type="email" class="form-control" id="email" aria-describedby="Email" placeholder="Enter Email" value="${obj.email_address || ''}" required>
      </div>
       <div class="form-group">
          <label for="order_type">Order Type</label>
          <select id="order_type" class="form-control">
            <option selected>In Person</option>
            <option>Phone</option>
          </select>
        </div>
      
      <button type="submit" class="btn btn-primary">Submit Order
      </button>
    </form>`;

  renderToDom('#form-container', domString);
};

export default addOrderForm;
