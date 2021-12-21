import React from 'react';
import { NavLink } from 'react-router-dom';

export const SidenavButton = ({ route, name, icon, type, options = [] }) => {
  return (
    <>
      {type === 1 ? (
        <li className="nav-item">
          <NavLink className="nav-link" to={route} activeclassNameName="active">
            <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center  me-2 d-flex align-items-center justify-content-center">
              <i className={icon}></i>
            </div>
            <span className="nav-link-text ms-1">{name}</span>
          </NavLink>
        </li>
      ) : (
        <li className="nav-item">
          <a
            data-bs-toggle="collapse"
            href="#dashboardsExamples"
            class="nav-link "
            aria-controls="dashboardsExamples"
            role="button"
            aria-expanded="false"
            activeclassNameName="active collapsed"
          >
            <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center  me-2 d-flex align-items-center justify-content-center">
              <i className={icon}></i>
            </div>
            <span className="nav-link-text ms-1">{name}</span>
          </a>
          <div class="collapse" activeclassNameName="show" id="dashboardsExamples">
            <ul class="nav ms-4 ps-3">
              {options.map((e) => (
                <li class="nav-item " activeclassNameName="active">
                  <NavLink class="nav-link " to={e.route} activeclassNameName="active">
                    <span class="sidenav-mini-icon"> {e.miniIcon}</span>
                    <span class="sidenav-normal">{e.name} </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </li>
      )}
    </>
  );
};
