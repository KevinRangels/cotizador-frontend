import React from 'react';

export const TableQuote = () => {
  return (
    <div class="table-responsive mt-3">
      <table class="table align-items-center mb-0">
        <thead>
          <tr>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Descripción</th>
            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Lamina</th>
            <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Piezas</th>
            <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Medidas</th>
            <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Minutos</th>
            <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Agregados</th>
            <th class="text-secondary opacity-7"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="d-flex px-2 py-1">
                <div class="d-flex flex-column justify-content-center">
                  <h6 class="mb-0 text-xs">Puerta de 100 x 300 con grabaciones</h6>
                </div>
              </div>
            </td>
            <td>
              <p class="text-xs font-weight-bold mb-0">MDF</p>
            </td>
            <td class="align-middle text-center ">
              <span class="text-secondary text-xs font-weight-bold">30 unidades</span>
            </td>
            <td className="align-middle text-center">
              <p class="text-xs font-weight-bold mb-0">30x30 cm</p>
            </td>
            <td class="align-middle text-center">
              <span class="text-secondary text-xs font-weight-bold">120 minutos</span>
            </td>
            <td class="align-middle text-start">
              <p class="text-xs font-weight-bold mb-0">
                Vinilos: <span className="text-xs text-secondary">10 cm</span>
              </p>
              <p class="text-xs font-weight-bold mb-0">
                Errajes: <span className="text-xs text-secondary">2 unidades</span>
              </p>
              <p class="text-xs font-weight-bold mb-0">
                Pintura: <span className="text-xs text-secondary">5.000 COP</span>
              </p>
            </td>
            <td class="text-sm">
              <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#newQuote" class="mx-3">
                <i class="fas fa-edit text-secondary" aria-hidden="true"></i>
              </a>
              <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Delete product">
                <i class="fas fa-trash text-secondary" aria-hidden="true"></i>
              </a>
            </td>
          </tr>

          <tr>
            <td>
              <div class="d-flex px-2 py-1">
                <div class="d-flex flex-column justify-content-center">
                  <h6 class="mb-0 text-xs">Caja con grabado</h6>
                </div>
              </div>
            </td>
            <td>
              <p class="text-xs font-weight-bold mb-0">MDF </p>
            </td>
            <td class="align-middle text-center ">
              <span class="text-secondary text-xs font-weight-bold">10 unidades</span>
            </td>
            <td className="align-middle text-center">
              <p class="text-xs font-weight-bold mb-0">30x30 cm</p>
            </td>
            <td class="align-middle text-center">
              <span class="text-secondary text-xs font-weight-bold">20 minutos</span>
            </td>
            <td class="align-middle text-start"></td>
            <td class="text-sm">
              <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#newQuote" class="mx-3">
                <i class="fas fa-edit text-secondary" aria-hidden="true"></i>
              </a>
              <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Delete product">
                <i class="fas fa-trash text-secondary" aria-hidden="true"></i>
              </a>
            </td>
          </tr>

          <tr>
            <td>
              <div class="d-flex px-2 py-1">
                <div class="d-flex flex-column justify-content-center">
                  <h6 class="mb-0 text-xs">Repizas</h6>
                </div>
              </div>
            </td>
            <td>
              <p class="text-xs font-weight-bold mb-0">MDF</p>
            </td>
            <td class="align-middle text-center ">
              <span class="text-secondary text-xs font-weight-bold">30 unidades</span>
            </td>
            <td className="align-middle text-center">
              <p class="text-xs font-weight-bold mb-0">30x30 cm</p>
            </td>
            <td class="align-middle text-center">
              <span class="text-secondary text-xs font-weight-bold">920 minutos</span>
            </td>
            <td class="align-middle text-start">
              <p class="text-xs font-weight-bold mb-0">
                Errajes: <span className="text-xs text-secondary">12 unidades</span>
              </p>
            </td>
            <td class="text-sm">
              <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#newQuote" class="mx-3">
                <i class="fas fa-edit text-secondary" aria-hidden="true"></i>
              </a>
              <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Delete product">
                <i class="fas fa-trash text-secondary" aria-hidden="true"></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
