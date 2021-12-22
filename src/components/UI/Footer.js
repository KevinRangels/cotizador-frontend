import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="footer pt-3  ">
      <div className="container-fluid">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-6 mb-lg-0 mb-4">
            <div className="copyright text-center text-sm text-muted text-lg-start">
              <div className="copyright text-center text-sm text-muted text-lg-start">
                © Todos los derechos reservados, 2022, <strong>Softla ERP</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
