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
                    <div className="row mt-3">
                      <div className="col-md-4">
                        <div className="modalNewQuote__steps">
                          <h6>1. Tipo cliente</h6>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <Select id="type__client" label="Seleccione el tipo de cliente a cotizar" />
                          </div>
                          <div className="col-md-12">
                            <label>Descripción</label>
                            <input class="multisteps-form__input form-control" type="text" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
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
                      <div className="col-md-4">
                        <div className="modalNewQuote__steps">
                          <h6>3. Cantidad de piezas </h6>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <label>Total de piezas</label>
                            <input class="multisteps-form__input form-control" type="number" />
                          </div>
                          <div className="col-md-6">
                            <label>Minutos que tardara</label>
                            <input class="multisteps-form__input form-control" type="number" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="modalNewQuote__steps">
                        <h6>4. Agregados </h6>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-5">
                            <Select id="type__aggregates" label="Seleccionar agregado" />
                          </div>
                          <div className="col-5">
                            <label>Medidas</label>
                            <input class="multisteps-form__input form-control" type="number" />
                          </div>
                          <div className="col-2 d-flex align-items-end">
                            <button class="btn btn-icon btn-2 btn-primary mb-0" type="button">
                              <span class="btn-inner--icon">
                                <i class="fas fa-plus"></i>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div class="">
                          <div class="table-responsive">
                            <table class="table align-items-center mb-0">
                              <thead>
                                <tr>
                                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Agregado</th>
                                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Medidas / Unidades</th>
                                  <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Acción</th>
                                  <th></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <div class="d-flex px-2">
                                      <div class="my-auto">
                                        <h6 class="mb-0 text-xs">Spotify</h6>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <p class="text-xs font-weight-bold mb-0">10x30 cm</p>
                                  </td>
                                  <td class="text-sm">
                                    <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#newUser" class="mx-3">
                                      <i class="fas fa-edit text-secondary" aria-hidden="true"></i>
                                    </a>
                                    <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Delete product">
                                      <i class="fas fa-trash text-secondary" aria-hidden="true"></i>
                                    </a>
                                  </td>
                                </tr>

                                <tr>
                                  <td>
                                    <div class="d-flex px-2">
                                      <div class="my-auto">
                                        <h6 class="mb-0 text-xs">Invision</h6>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <p class="text-xs font-weight-bold mb-0">50x50 cm</p>
                                  </td>

                                  <td class="text-sm">
                                    <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#newUser" class="mx-3">
                                      <i class="fas fa-edit text-secondary" aria-hidden="true"></i>
                                    </a>
                                    <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Delete product">
                                      <i class="fas fa-trash text-secondary" aria-hidden="true"></i>
                                    </a>
                                  </td>
                                </tr>

                                <tr>
                                  <td>
                                    <div class="d-flex px-2">
                                      <div class="my-auto">
                                        <h6 class="mb-0 text-xs">Jira</h6>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <p class="text-xs font-weight-bold mb-0">5 unidades</p>
                                  </td>
                                  <td class="text-sm">
                                    <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#newUser" class="mx-3">
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
