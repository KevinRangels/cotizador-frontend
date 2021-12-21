import React, { useEffect } from 'react';
import { DataTable } from 'simple-datatables';

export const TableRawMaterial = () => {
  useEffect(() => {
    if (document.getElementById('products-list')) {
      new DataTable('#products-list', {
        searchable: true,
        fixedHeight: false,
        perPage: 10,
      });
    }
  }, []);
  return (
    <div class="table-responsive">
      <table class="table table-flush" id="products-list">
        <thead class="thead-light">
          <tr>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Formato</th>
            <th>Cantidad de piezas</th>
            <th>Espesor</th>
            <th>Precio de lamina</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="d-flex">
                <div class="form-check my-auto">
                  <input class="form-check-input" type="checkbox" id="customCheck1" checked />
                </div>
                <h6 class="ms-3 my-auto">Lamina MDF 1,5 cm</h6>
              </div>
            </td>
            <td class="text-sm">MDF</td>
            <td class="text-sm">100 X 100 cm</td>
            <td class="text-sm">4 piezas</td>
            <td class="text-sm">1.5 cm</td>
            <td class="text-sm">30.000 COP</td>
            <td class="text-sm">
              <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#newUser" class="mx-3">
                <i class="fas fa-user-edit text-secondary"></i>
              </a>
              <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Delete product">
                <i class="fas fa-trash text-secondary"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <div class="d-flex">
                <div class="form-check my-auto">
                  <input class="form-check-input" type="checkbox" id="customCheck1" checked />
                </div>
                <h6 class="ms-3 my-auto">Lamina MDF 1,5 cm</h6>
              </div>
            </td>
            <td class="text-sm">MDF</td>
            <td class="text-sm">100 X 100 cm</td>
            <td class="text-sm">4 piezas</td>
            <td class="text-sm">1.5 cm</td>
            <td class="text-sm">30.000 COP</td>
            <td class="text-sm">
              <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#newUser" class="mx-3">
                <i class="fas fa-user-edit text-secondary"></i>
              </a>
              <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Delete product">
                <i class="fas fa-trash text-secondary"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <div class="d-flex">
                <div class="form-check my-auto">
                  <input class="form-check-input" type="checkbox" id="customCheck1" checked />
                </div>
                <h6 class="ms-3 my-auto">Lamina MDF 1,5 cm</h6>
              </div>
            </td>
            <td class="text-sm">MDF</td>
            <td class="text-sm">100 X 100 cm</td>
            <td class="text-sm">4 piezas</td>
            <td class="text-sm">1.5 cm</td>
            <td class="text-sm">30.000 COP</td>
            <td class="text-sm">
              <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#newUser" class="mx-3">
                <i class="fas fa-user-edit text-secondary"></i>
              </a>
              <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Delete product">
                <i class="fas fa-trash text-secondary"></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
