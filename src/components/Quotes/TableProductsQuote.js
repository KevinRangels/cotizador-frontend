import React, { useEffect } from 'react';
import { DataTable } from 'simple-datatables';

export const TableProductsQuote = () => {
  useEffect(() => {
    if (document.getElementById('productsQuote-list')) {
      new DataTable('#productsQuote-list', {
        searchable: true,
        fixedHeight: false,
        perPage: 5,
      });
    }
  }, []);
  return (
    <div className="table-responsive">
      <table className="table table-flush" id="productsQuote-list">
        <thead className="thead-light">
          <tr>
            <th>Nombre</th>
            <th>Medidas</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Total</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5, 6].map((e) => (
            <tr>
              <td>
                <div className="d-flex">
                  {/* <div className="form-check my-auto">
                  <input className="form-check-input" type="checkbox" id="customCheck1" checked />
                </div> */}
                  <h6 className="ms-3 my-auto">Topper Feliz cumpleaños</h6>
                </div>
              </td>
              <td className="text-sm">50 x 30 CM</td>
              <td className="text-sm d-flex justify-content-center">
                <input type="number" value={1} className="form-control w-50" />
              </td>
              <td className="text-sm ">
                <input type="text" value={10000} className="form-control w-100" />
              </td>
              <td className="text-sm">100.000 COP</td>
              <td className="text-sm">
                {/* <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#newClient" className="mx-3">
                <i className="fas fa-user-edit text-secondary"></i>
              </a> */}
                <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Delete product">
                  <i className="fas fa-trash text-secondary"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
