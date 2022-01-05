import React from 'react';
import { Product } from '../Pos/Product';
import { Select } from '../UI/Forms/Select';
import { Pagination } from '../UI/Pagination/Pagination';

export const ModalProductsQuote = () => {
  return (
    <div className="modal fade" id="newProductQuote" tabindex="-1" aria-hidden="true">
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="ModalLabel">
              Seleccionar Productos
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="modal-body">
            <div className="row mb-3">
              <div className="col-md-3">
                <label>Buscar</label>
                <input type="email" className="form-control" placeholder="Nombre, cod, precio" aria-label="Email" />
              </div>
              <div className="col-md-3">
                <Select id="product__categories" label="Categorías" />
              </div>
            </div>
            <div className="row mb-3">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((e) => (
                <div className="col-md-3">
                  <Product />
                </div>
              ))}
            </div>
            <div className="row">
              <div className="d-flex justify-content-end">
                <Pagination />
              </div>
            </div>
          </div>
          {/* <div className="modal-footer">
            <button type="button" className="btn bg-gradient-secondary btn-sm" data-bs-dismiss="modal">
              Cerrar
            </button>
            <button type="button" className="btn bg-gradient-primary btn-sm">
              Agregar
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};
