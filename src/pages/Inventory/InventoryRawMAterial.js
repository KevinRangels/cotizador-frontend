import React from 'react';
import { TableRawMaterial } from '../../components/Inventory/TableRawMaterial';

export const InventoryRawMaterial = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-6">
          <h4>Inventario materia prima</h4>
          <p>lorem</p>
        </div>
        <div className="col-lg-6 text-right d-flex flex-column justify-content-center">
          <button type="button" className="btn bg-gradient-primary mb-0 ms-lg-auto me-lg-0 me-auto mt-lg-0 mt-2">
            Agregar
          </button>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-lg-12">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="font-weight-bolder">Inventario</h5>
              <TableRawMaterial />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
