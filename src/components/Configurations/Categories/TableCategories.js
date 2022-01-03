import React, { useEffect } from 'react';
import { DataTable } from 'simple-datatables';

export const TableCategories = () => {
  return (
    <div className="table-responsive">
      <table className="table table-flush" id="clients-list">
        <thead className="thead-light">
          <tr>
            <th>Nombre</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <h6 className="ms-3 my-auto">Navidad</h6>
            </td>
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
              <h6 className="ms-3 my-auto">Navidad</h6>
            </td>
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
              <h6 className="ms-3 my-auto">Navidad</h6>
            </td>
            <td className="text-sm">
              <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#newClient" className="mx-3">
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
