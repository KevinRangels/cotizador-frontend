import React, { useEffect } from 'react';
import { DataTable } from 'simple-datatables';

export const TableClients = () => {
  useEffect(() => {
    if (document.getElementById('clients-list')) {
      new DataTable('#clients-list', {
        searchable: true,
        fixedHeight: false,
        perPage: 10,
      });
    }
  }, []);

  return (
    <div className="table-responsive">
      <table className="table table-flush" id="clients-list">
        <thead className="thead-light">
          <tr>
            <th>Nombre</th>
            <th>Cédula</th>
            <th>Teléfono</th>
            <th>Correo</th>
            <th>Dirección</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="d-flex">
                <div className="form-check my-auto">
                  <input className="form-check-input" type="checkbox" id="customCheck1" checked />
                </div>
                <h6 className="ms-3 my-auto">Sheldon Cooper</h6>
              </div>
            </td>
            <td className="text-sm">22.986.138</td>
            <td className="text-sm">424-8644310</td>
            <td className="text-sm">mail@mail.com</td>
            <td className="text-sm">is simply dummy text of the</td>
            <td className="text-sm">
              <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#newClient" className="mx-3">
                <i className="fas fa-user-edit text-secondary"></i>
              </a>
              <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Delete product">
                <i className="fas fa-trash text-secondary"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex">
                <div className="form-check my-auto">
                  <input className="form-check-input" type="checkbox" id="customCheck1" checked />
                </div>
                <h6 className="ms-3 my-auto">Rjesh Koothrappali</h6>
              </div>
            </td>
            <td className="text-sm">111111</td>
            <td className="text-sm">424-8644310</td>
            <td className="text-sm">mail@mail.com</td>
            <td className="text-sm">is simply dummy text of the</td>
            <td className="text-sm">
              <a href="javascript:;" className="mx-3" data-bs-toggle="modal" data-bs-target="#newClient">
                <i className="fas fa-user-edit text-secondary"></i>
              </a>
              <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Delete product">
                <i className="fas fa-trash text-secondary"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex">
                <div className="form-check my-auto">
                  <input className="form-check-input" type="checkbox" id="customCheck1" checked />
                </div>
                <h6 className="ms-3 my-auto">Howard Wolowitz</h6>
              </div>
            </td>
            <td className="text-sm">222222</td>
            <td className="text-sm">424-8644310</td>
            <td className="text-sm">mail@mail.com</td>
            <td className="text-sm">is simply dummy text of the</td>
            <td className="text-sm">
              <a href="javascript:;" className="mx-3" data-bs-toggle="modal" data-bs-target="#newClient">
                <i className="fas fa-user-edit text-secondary"></i>
              </a>
              <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Delete product">
                <i className="fas fa-trash text-secondary"></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
