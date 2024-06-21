import { getClosedOrders } from '../api/orderData';
import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const revenuePage = () => {
  clearDom();

  getClosedOrders().then((orders) => {
    let orderSum = 0;
    let tipSum = 0;
    let walkInSum = 0;
    let callInSum = 0;
    let cashSum = 0;
    let creditSum = 0;
    let mobileSum = 0;
    let skeocoinSum = 0;
    orders.forEach((order) => {
      orderSum += Number(order.order_total);
      tipSum += Number(order.tip_amount);
      callInSum += order.order_type === 'Phone';
      walkInSum += order.order_type === 'In Person';
      cashSum += order.payment_type === 'cash';
      creditSum += order.payment_type === 'credit';
      mobileSum += order.payment_type === 'mobile';
      skeocoinSum += order.payment_type === 'skeocoin';
    });
    const domString = `
    <div id="revenue-page-container">
    <h1 class="revenue-page-header" id="revenue-page-header">REVENUE</h1>
    <h1 class="revenue-page-header"  id="total-revenue-header">TOTAL REVENUE: $${Number(orderSum).toFixed(2)}</h1>
    <div id="revenue-page-data-container">
      <p id="revenue-page-date-range">DATE RANGE: </p>
      <p id="revenue-page-total-tips">TOTAL TIPS: $${Number(tipSum).toFixed(2)}</p>
      <p id="revenue-page-call-ins">TOTAL CALL IN ORDERS: ${callInSum}</p>
      <p id="revenue-page-walk-ins">TOTAL WALK IN ORDERS: ${walkInSum}</p>
      <p id="revenue-page-payment-types">PAYMENT TYPES:</p>
      <p id="revenue-page-cash">CASH: ${cashSum}</p>
      <p id="revenue-page-credit">CREDIT: ${creditSum}</p>
      <p id="revenue-page-mobile">MOBILE: ${mobileSum}</p>
      <p id="revenue-page-skeocoin">SKEOCOIN: ${skeocoinSum}</p>
    </div>
  </div>
  `;
    renderToDOM('#main-container', domString);
  });
};

export default revenuePage;
