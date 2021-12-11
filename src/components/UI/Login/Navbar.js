import React from 'react';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg position-absolute top-0 z-index-3 w-100 shadow-none my-3  navbar-transparent mt-4">
      <div className="container">
        <a className="navbar-brand font-weight-bolder ms-lg-0 ms-3 text-white" href="https://creatyplus.com/" target="_blank">
          Decolaser
        </a>
        <button
          className="navbar-toggler shadow-none ms-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navigation"
          aria-controls="navigation"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon mt-2">
            <span className="navbar-toggler-bar bar1"></span>
            <span className="navbar-toggler-bar bar2"></span>
            <span className="navbar-toggler-bar bar3"></span>
          </span>
        </button>
        <div className="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0 justify-content-end" id="navigation">
          <ul className="navbar-nav d-lg-block d-none ">
            <li className="nav-item">
              <a
                href=" https://themes.getbootstrap.com/product/soft-ui-dashboard-pro/ "
                className="btn btn-sm  bg-gradient-primary  btn-round mb-0 me-1"
                onclick="smoothToPricing('pricing-soft-ui')"
              >
                Comprar ahora
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
