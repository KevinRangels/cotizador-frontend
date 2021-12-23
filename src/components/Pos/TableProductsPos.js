import React, { useEffect } from 'react';
import { DataTable } from 'simple-datatables';

export const TableProductsPos = () => {
  useEffect(() => {
    if (document.getElementById('products-list-pos')) {
      new DataTable('#products-list-pos', {
        searchable: true,
        fixedHeight: false,
        perPage: 6,
      });
    }
  }, []);
  return (
    <div class="table-responsive">
      <table class="table table-flush" id="products-list-pos">
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
                {/* <div>
                  <img src="../../../assets/img/team-2.jpg" class="avatar avatar-sm me-3" alt="avatar image" />
                </div> */}
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
              <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Preview product">
                <i class="fas fa-eye text-secondary" aria-hidden="true"></i>
              </a>
              <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Delete product" className="mx-2">
                <i class="fas fa-plus  text-secondary" aria-hidden="true"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <div class="d-flex px-2 py-1">
                {/* <div>
                  <img src="../../../assets/img/team-2.jpg" class="avatar avatar-sm me-3" alt="avatar image" />
                </div> */}
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
              <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Preview product">
                <i class="fas fa-eye text-secondary" aria-hidden="true"></i>
              </a>
              <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Delete product" className="mx-2">
                <i class="fas fa-plus  text-secondary" aria-hidden="true"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <div class="d-flex px-2 py-1">
                {/* <div>
                  <img src="../../../assets/img/team-2.jpg" class="avatar avatar-sm me-3" alt="avatar image" />
                </div> */}
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
              <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Preview product">
                <i class="fas fa-eye text-secondary" aria-hidden="true"></i>
              </a>
              <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Delete product" className="mx-2">
                <i class="fas fa-plus  text-secondary" aria-hidden="true"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <div class="d-flex px-2 py-1">
                {/* <div>
                  <img src="../../../assets/img/team-2.jpg" class="avatar avatar-sm me-3" alt="avatar image" />
                </div> */}
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
              <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Preview product">
                <i class="fas fa-eye text-secondary" aria-hidden="true"></i>
              </a>
              <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Delete product" className="mx-2">
                <i class="fas fa-plus  text-secondary" aria-hidden="true"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <div class="d-flex px-2 py-1">
                {/* <div>
                  <img src="../../../assets/img/team-2.jpg" class="avatar avatar-sm me-3" alt="avatar image" />
                </div> */}
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
              <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Preview product">
                <i class="fas fa-eye text-secondary" aria-hidden="true"></i>
              </a>
              <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Delete product" className="mx-2">
                <i class="fas fa-plus  text-secondary" aria-hidden="true"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <div class="d-flex px-2 py-1">
                {/* <div>
                  <img src="../../../assets/img/team-2.jpg" class="avatar avatar-sm me-3" alt="avatar image" />
                </div> */}
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
              <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Preview product">
                <i class="fas fa-eye text-secondary" aria-hidden="true"></i>
              </a>
              <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Delete product" className="mx-2">
                <i class="fas fa-plus  text-secondary" aria-hidden="true"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <div class="d-flex px-2 py-1">
                {/* <div>
                  <img src="../../../assets/img/team-2.jpg" class="avatar avatar-sm me-3" alt="avatar image" />
                </div> */}
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
              <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Preview product">
                <i class="fas fa-eye text-secondary" aria-hidden="true"></i>
              </a>
              <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Delete product" className="mx-2">
                <i class="fas fa-plus  text-secondary" aria-hidden="true"></i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
