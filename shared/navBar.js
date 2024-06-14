import renderToDOM from '../utils/renderToDOM';
import logo from '../assets/logo.png';

const navBar = () => {
  const domString = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
    <div class="container-fluid">
      <a class="navbar-brand title" href="#">
      <img src="${logo}" width="55" height="55" alt="">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item active">
          <a class="nav-link" href="#" id="view-orders">
            View Orders <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" id="createAnOrder">Create an Order</a>
        </li>
        
        </ul>
         <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search Orders" aria-label="Search">
          </form>
        
        <span class="navbar-text">
          <div id="logout-button"></div>
        </span>
        </div>
        </div>
      </nav>`;
  renderToDOM('#navigation', domString);
};

export default navBar;
