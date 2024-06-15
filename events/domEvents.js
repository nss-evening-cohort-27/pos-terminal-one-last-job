import addOrderForm from '../components/forms/addOrderForm';

const domEvents = () => {
  // landing page events
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('landing-page-create-an-order-btn')) {
      addOrderForm();
    }
  });
};

export default domEvents;
