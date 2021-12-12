import React from 'react';

export const TableUsers = () => {
  return (
    <div class="table-responsive">
      <table class="table table-flush" id="products-list">
        <thead class="thead-light">
          <tr>
            <th>Nombre</th>
            <th>Cédula</th>
            <th>Teléfono</th>
            <th>Correo</th>
            <th>Rol</th>
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
                <h6 class="ms-3 my-auto">Sheldon Cooper</h6>
              </div>
            </td>
            <td class="text-sm">22.986.138</td>
            <td class="text-sm">424-8644310</td>
            <td class="text-sm">mail@mail.com</td>
            <td>
              <span class="badge badge-danger badge-sm">Operador</span>
            </td>
            <td class="text-sm">
              <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Preview product">
                <i class="fas fa-eye text-secondary"></i>
              </a>
              <a href="javascript:;" class="mx-3" data-bs-toggle="tooltip" data-bs-original-title="Edit product">
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
                <h6 class="ms-3 my-auto">Sheldon Cooper</h6>
              </div>
            </td>
            <td class="text-sm">22.986.138</td>
            <td class="text-sm">424-8644310</td>
            <td class="text-sm">mail@mail.com</td>
            <td>
              <span class="badge badge-warning badge-sm">Super Admin</span>
            </td>
            <td class="text-sm">
              <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Preview product">
                <i class="fas fa-eye text-secondary"></i>
              </a>
              <a href="javascript:;" class="mx-3" data-bs-toggle="tooltip" data-bs-original-title="Edit product">
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
                <h6 class="ms-3 my-auto">Sheldon Cooper</h6>
              </div>
            </td>
            <td class="text-sm">22.986.138</td>
            <td class="text-sm">424-8644310</td>
            <td class="text-sm">mail@mail.com</td>
            <td>
              <span class="badge badge-success badge-sm">Administrador</span>
            </td>
            <td class="text-sm">
              <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Preview product">
                <i class="fas fa-eye text-secondary"></i>
              </a>
              <a href="javascript:;" class="mx-3" data-bs-toggle="tooltip" data-bs-original-title="Edit product">
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
