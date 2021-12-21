import React from 'react';
import { NavLink } from 'react-router-dom';
import Buttons from './Sidenav.json';
import { SidenavButton } from './SidenavButton';
import iconBrand from '../../../assets/images/brand/logo_main.svg';

export const Sidenav = () => {
  return (
    <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 " id="sidenav-main">
      <div className="sidenav-header">
        <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
        <a className="navbar-brand m-0" href=" https://demos.creative-tim.com/marketplace/soft-ui-dashboard-pro/pages/dashboards/default.html " target="_blank">
          <img src={iconBrand} className="navbar-brand-img h-100" alt="main_logo" />
          {/* <span className="ms-1 font-weight-bold">Decolaser</span> */}
        </a>
      </div>
      <hr className="horizontal dark mt-0" />
      <div className="collapse navbar-collapse  w-auto h-auto max-height-vh-100 h-100" id="sidenav-collapse-main">
        <ul className="navbar-nav">
          {Buttons.btns.map((data, i) => (
            <SidenavButton key={i} route={data.route} name={data.name} icon={data.icon} type={data.type} options={data.options} />
          ))}
          <li className="nav-item">
            <hr className="horizontal dark" />
            <h6 className="ps-4  ms-2 text-uppercase text-xs font-weight-bolder opacity-6">DOCS</h6>
          </li>
        </ul>
      </div>
      <div className="sidenav-footer mx-3 mt-3 pt-3">
        <div className="card card-background shadow-none card-background-mask-secondary" id="sidenavCard">
          <div
            className="full-background"
            style={{
              backgroundImage: "url('../../assets/img/curved-images/white-curved.jpeg')",
            }}
          ></div>
          <div className="card-body text-start p-3 w-100">
            <div className="icon icon-shape icon-sm bg-white shadow text-center mb-3 d-flex align-items-center justify-content-center border-radius-md">
              <i className="ni ni-diamond text-dark text-gradient text-lg top-0" aria-hidden="true" id="sidenavCardIcon"></i>
            </div>
            <div className="docs-info">
              <h6 className="text-white up mb-0">¿Necesitas ayuda?</h6>
              <p className="text-xs font-weight-bold">Por favor, consulte la documentación.</p>
              <a href="https://www.creative-tim.com/learning-lab/bootstrap/overview/soft-ui-dashboard" target="_blank" className="btn btn-white btn-sm w-100 mb-0">
                Documentación
              </a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
