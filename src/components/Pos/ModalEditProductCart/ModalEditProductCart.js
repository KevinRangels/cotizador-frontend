import React from 'react';

export const ModalEditProductCart = () => {
  return (
    <div className="modal fade" id="editProductCart" tabindex="-1" aria-hidden="true">
      <div className="modal-dialog  modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="ModalLabel">
              Nombre de producto
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-12">
                <form className="">
                  <div className="row mt-3">
                    <div className="col-md-5">
                      <div className="row">
                        <div className="col-10 mb-2">
                          <label>Valor</label>
                          <input className="multisteps-form__input form-control" type="text" value={'100.000'} />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-10 mt-3 mt-sm-0 mb-2">
                          <label>Cantidad</label>
                          <input className="multisteps-form__input form-control" type="number" value={1} />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-10 mt-3 mt-sm-0">
                          <label>Descuento %</label>
                          <input className="multisteps-form__input form-control" type="number" min={1} maxLength={2} />
                        </div>
                      </div>
                    </div>
                    <div class="col-md-5 col-12 ms-auto">
                      <h6 class="mb-3">Costo del producto</h6>
                      <div class="d-flex justify-content-between">
                        <span class="mb-2 text-sm">Sub total:</span>
                        <span class="text-dark font-weight-bold ms-2">$90</span>
                      </div>
                      <div class="d-flex justify-content-between">
                        <span class="mb-2 text-sm">Descuento:</span>
                        <span class="text-dark ms-2 font-weight-bold">$14</span>
                      </div>
                      <div class="d-flex justify-content-between mt-4">
                        <span class="mb-2 text-lg">Total:</span>
                        <span class="text-dark text-lg ms-2 font-weight-bold">$105.95</span>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn bg-gradient-secondary btn-sm" data-bs-dismiss="modal">
              Cerrar
            </button>
            <button type="button" className="btn bg-gradient-primary btn-sm">
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
