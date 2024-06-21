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
    let debitSum = 0;
    let mobileSum = 0;
    let skeocoinSum = 0;
    const orderDates = [];

    orders.forEach((order) => {
      orderSum += Number(order.order_total);
      tipSum += Number(order.tip_amount);
      orderDates.push(order.date_closed);
      callInSum += order.order_type === 'Phone';
      walkInSum += order.order_type === 'In Person';
      cashSum += order.payment_type === 'cash';
      creditSum += order.payment_type === 'credit';
      debitSum += order.payment_type === 'debit';
      mobileSum += order.payment_type === 'mobile';
      skeocoinSum += order.payment_type === 'skeocoin';

      const earliestDate = new Date(orderDates.reduce(
        (previous, current) => (previous < current ? previous : current)
      ));

      const latestDate = new Date(orderDates.reduce(
        (previous, current) => (previous > current ? previous : current)
      ));

      const domString = `
      <div id="revenue-page-container">
        <h1 class="revenue-page-header" id="revenue-page-header">REVENUE</h1>
        <h1 class="revenue-page-header"  id="total-revenue-header">TOTAL REVENUE: $${Number(orderSum).toFixed(2)}</h1>
        <div id="revenue-page-data-container">
          <p id="revenue-page-date-range-header"><strong>DATE RANGE:</strong></p>
          <p id="revenue-page-date-range">${earliestDate.toDateString()} - ${latestDate.toDateString()}</p>
          <p id="revenue-page-total-tips"><strong>TOTAL TIPS:</strong> $${Number(tipSum).toFixed(2)}</p>
          <p id="revenue-page-call-ins"><strong>TOTAL CALL IN ORDERS:</strong> ${callInSum}</p>
          <p id="revenue-page-walk-ins"><strong>TOTAL WALK IN ORDERS:</strong> ${walkInSum}</p>
          <p id="revenue-page-payment-types"><strong>PAYMENT TYPES:</strong> </p>
          <p id="revenue-page-cash">CASH: ${cashSum}</p>
          <p id="revenue-page-credit">CREDIT: ${creditSum}</p>
          <p id="revenue-page-debit">DEBIT: ${debitSum}</p>
          <p id="revenue-page-mobile">MOBILE: ${mobileSum}</p>
          <p id="revenue-page-skeocoin">SKEOCOIN: ${skeocoinSum}</p>
        </div>
      </div>
    `;
      renderToDOM('#main-container', domString);
    });
  });
};

export default revenuePage;
