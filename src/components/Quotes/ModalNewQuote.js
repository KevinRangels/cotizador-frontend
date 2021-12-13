import React from 'react';
import { Select } from '../UI/Forms/Select';

export const ModalNewQuote = () => {
  return (
    <div class="modal fade" id="newQuote" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalLabel">
              Nueva cotización
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
              <i class="fas fa-times"></i>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-12">
                <form class="">
                  <div class="border-radius-xl bg-white" data-animation="FadeIn">
                    <div class="multisteps-form__content">
                      <div className="row mt-3">
                        <div className="col-md-3">
                          <div className="modalNewQuote__steps">
                            <h6>1. Tipo cliente</h6>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <Select id="type__client" label="Seleccione el tipo de cliente a cotizar" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="modalNewQuote__steps">
                            <h6>2. Tipo de lamina</h6>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <Select id="type__material" label="Tipo de material" />
                            </div>
                            <div className="col-md-6">
                              <label>Largo de pieza</label>
                              <input class="multisteps-form__input form-control" type="text" />
                            </div>
                            <div className="col-md-6">
                              <label>Ancho de pieza</label>
                              <input class="multisteps-form__input form-control" type="text" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="modalNewQuote__steps">
                            <h6>3. Cantidad de piezas </h6>
                          </div>
                          <div className="row">
                            <div className="col-md-8">
                              <label>Total de piezas</label>
                              <input class="multisteps-form__input form-control" type="number" />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="modalNewQuote__steps">
                            <h6>4. Minutos de corte y grabado</h6>
                          </div>
                          <div className="row">
                            <div className="col-md-8">
                              <label>Minutos que tardara</label>
                              <input class="multisteps-form__input form-control" type="number" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn bg-gradient-secondary btn-sm" data-bs-dismiss="modal">
              Cerrar
            </button>
            <button type="button" class="btn bg-gradient-primary btn-sm">
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
