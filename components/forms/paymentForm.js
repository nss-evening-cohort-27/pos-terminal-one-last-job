import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';

const paymentForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-payment--${obj.firebaseKey}` : 'submit-payment'}" class="mb-4">
      <div class="form-group">
        <label for="payment-type">Payment Type</label>
        <select class="form-control" id="payment-type" name="payment-type" required>
          <option value="${obj.payment_type || ''}" required disabled selected>Select a payment type</option>
          <option value="cash">Cash</option>
          <option value="credit">Credit</option>
          <option value="mobile">Mobile</option>
          <option value="debit">Debit</option>
          <option value="skeocoin">Skeocoin</option>
        </select>
      </div>      
      <div class="form-group">
      <label for="tip-amount">Tip Amount</label>
      <input type="number" min="0" step="0.01 class="form-control" id="tip-amount" placeholder="Enter Tip Amount Here." value="${obj.tip_amount || ''}" required>
    </div>
      <button type="submit" id="close-order-btn" class="btn btn-primary">Close Order</button>
    </form>`;

  renderToDom('#form-container', domString);
};

export default paymentForm;
