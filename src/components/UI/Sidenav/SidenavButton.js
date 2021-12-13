import React from 'react';
import { NavLink } from 'react-router-dom';

export const SidenavButton = ({ route, name, icon }) => {
  return (
    <li className="nav-item">
      <NavLink className="nav-link" to={route} activeclassNameName="active">
        <div className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center  me-2 d-flex align-items-center justify-content-center">
          <i className={icon}></i>
        </div>
        <span className="nav-link-text ms-1">{name}</span>
      </NavLink>
    </li>
  );
};
