import React from 'react';
import { Select } from '../UI/Forms/Select';

export const ModalAddMaterial = () => {
  return (
    <div className="modal fade" id="newRawMaterial" tabindex="-1" aria-hidden="true">
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="ModalLabel">
              Nuevo material
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-12">
                <form className="">
                  <div className="border-radius-xl bg-white" data-animation="FadeIn">
                    <div className="row mt-3">
                      <div className="col-md-12">
                        <div className="row">
                          <div className="col-md-4 mb-2">
                            <Select id="type__material" label="Selecciona el tipo de material" />
                          </div>
                          <div className="col-md-4 mb-2">
                            <Select id="type__formatted" label="Selecciona formato de la lamina" />
                          </div>
                          <div className="col-md-4 mb-2">
                            <label>Cantidad de piezas</label>
                            <input className="multisteps-form__input form-control" type="text" />
                          </div>
                          <div className="col-md-4 mb-2">
                            <label>Espesor</label>
                            <input className="multisteps-form__input form-control" type="text" />
                          </div>
                          <div className="col-md-4 mb-2">
                            <label>Precio de la lamina</label>
                            <input className="multisteps-form__input form-control" type="text" />
                          </div>
                          <div className="col-md-4 mb-2">
                            <label>% de ganancia</label>
                            <input className="multisteps-form__input form-control" type="text" />
                          </div>
                        </div>
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
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
