import renderToDom from '../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container"></div>
    <div id="add-button"></div>
    <div id="form-container"></div>
    <div id="orderCards"></div>
    <div id="view"></div>
  `;

  renderToDom('#app', domString);
};

export default domBuilder;
