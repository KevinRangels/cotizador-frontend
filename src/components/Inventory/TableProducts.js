import React, { useEffect } from 'react';
import { DataTable } from 'simple-datatables';

export const TableProducts = () => {
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
            <th>Material</th>
            <th>Medidas</th>
            <th>Stock</th>
            <th>Precio</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="d-flex px-2 py-1">
                <div>
                  <img src="../../../assets/img/team-2.jpg" class="avatar avatar-sm me-3" alt="avatar image" />
                </div>
                <div class="d-flex flex-column justify-content-center">
                  <h6 class="mb-0 text-sm">Torre Eiffel</h6>
                </div>
              </div>
            </td>
            <td class="text-sm">MDF</td>
            <td class="text-sm">100 X 100 cm</td>
            <td class="text-sm">10 piezas</td>
            <td class="text-sm">130.000 COP</td>
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
              <div class="d-flex px-2 py-1">
                <div>
                  <img src="../../../assets/img/team-2.jpg" class="avatar avatar-sm me-3" alt="avatar image" />
                </div>
                <div class="d-flex flex-column justify-content-center">
                  <h6 class="mb-0 text-sm">Cruz</h6>
                </div>
              </div>
            </td>
            <td class="text-sm">MDF</td>
            <td class="text-sm">100 X 100 cm</td>
            <td class="text-sm">10 piezas</td>
            <td class="text-sm">5.000 COP</td>
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
              <div class="d-flex px-2 py-1">
                <div>
                  <img src="../../../assets/img/team-2.jpg" class="avatar avatar-sm me-3" alt="avatar image" />
                </div>
                <div class="d-flex flex-column justify-content-center">
                  <h6 class="mb-0 text-sm">Portarretrato</h6>
                </div>
              </div>
            </td>
            <td class="text-sm">MDF</td>
            <td class="text-sm">30 X 30 cm</td>
            <td class="text-sm">34 piezas</td>
            <td class="text-sm">10.000 COP</td>
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
