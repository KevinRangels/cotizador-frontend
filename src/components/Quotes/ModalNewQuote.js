import React from 'react';
import { Select } from '../UI/Forms/Select';

export const ModalNewQuote = () => {
  return (
    <div className="modal fade" id="newQuote" tabindex="-1" aria-hidden="true">
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="ModalLabel">
              Nueva cotización
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
                    <div classNameName="row mt-3">
                      <div classNameName="col-md-4">
                        <div classNameName="modalNewQuote__steps">
                          <h6>1. Tipo cliente</h6>
                        </div>
                        <div classNameName="row">
                          <div classNameName="col-md-12">
                            <Select id="type__client" label="Seleccione el tipo de cliente a cotizar" />
                          </div>
                          <div classNameName="col-md-12">
                            <label>Descripción</label>
                            <input className="multisteps-form__input form-control" type="text" />
                          </div>
                        </div>
                      </div>
                      <div classNameName="col-md-4">
                        <div classNameName="modalNewQuote__steps">
                          <h6>2. Tipo de lamina</h6>
                        </div>
                        <div classNameName="row">
                          <div classNameName="col-md-12">
                            <Select id="type__material" label="Tipo de material" />
                          </div>
                          <div classNameName="col-md-6">
                            <label>Largo de pieza</label>
                            <input className="multisteps-form__input form-control" type="text" />
                          </div>
                          <div classNameName="col-md-6">
                            <label>Ancho de pieza</label>
                            <input className="multisteps-form__input form-control" type="text" />
                          </div>
                        </div>
                      </div>
                      <div classNameName="col-md-4">
                        <div classNameName="modalNewQuote__steps">
                          <h6>3. Cantidad de piezas </h6>
                        </div>
                        <div classNameName="row">
                          <div classNameName="col-md-6">
                            <label>Total de piezas</label>
                            <input className="multisteps-form__input form-control" type="number" />
                          </div>
                          <div classNameName="col-md-6">
                            <label>Minutos que tardara</label>
                            <input className="multisteps-form__input form-control" type="number" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div classNameName="row mt-3">
                      <div classNameName="modalNewQuote__steps">
                        <h6>4. Agregados </h6>
                      </div>
                      <div classNameName="col-md-6">
                        <div classNameName="row">
                          <div classNameName="col-5">
                            <Select id="type__aggregates" label="Seleccionar agregado" />
                          </div>
                          <div classNameName="col-5">
                            <label>Medidas</label>
                            <input className="multisteps-form__input form-control" type="number" />
                          </div>
                          <div classNameName="col-2 d-flex align-items-end">
                            <button className="btn btn-icon btn-2 btn-primary mb-0" type="button">
                              <span className="btn-inner--icon">
                                <i className="fas fa-plus"></i>
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div classNameName="col-md-6">
                        <div className="">
                          <div className="table-responsive">
                            <table className="table align-items-center mb-0">
                              <thead>
                                <tr>
                                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Agregado</th>
                                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Medidas / Unidades</th>
                                  <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Acción</th>
                                  <th></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <div className="d-flex px-2">
                                      <div className="my-auto">
                                        <h6 className="mb-0 text-xs">Spotify</h6>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <p className="text-xs font-weight-bold mb-0">10x30 cm</p>
                                  </td>
                                  <td className="text-sm">
                                    <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#newUser" className="mx-3">
                                      <i className="fas fa-edit text-secondary" aria-hidden="true"></i>
                                    </a>
                                    <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Delete product">
                                      <i className="fas fa-trash text-secondary" aria-hidden="true"></i>
                                    </a>
                                  </td>
                                </tr>

                                <tr>
                                  <td>
                                    <div className="d-flex px-2">
                                      <div className="my-auto">
                                        <h6 className="mb-0 text-xs">Invision</h6>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <p className="text-xs font-weight-bold mb-0">50x50 cm</p>
                                  </td>

                                  <td className="text-sm">
                                    <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#newUser" className="mx-3">
                                      <i className="fas fa-edit text-secondary" aria-hidden="true"></i>
                                    </a>
                                    <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Delete product">
                                      <i className="fas fa-trash text-secondary" aria-hidden="true"></i>
                                    </a>
                                  </td>
                                </tr>

                                <tr>
                                  <td>
                                    <div className="d-flex px-2">
                                      <div className="my-auto">
                                        <h6 className="mb-0 text-xs">Jira</h6>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <p className="text-xs font-weight-bold mb-0">5 unidades</p>
                                  </td>
                                  <td className="text-sm">
                                    <a href="javascript:;" data-bs-toggle="modal" data-bs-target="#newUser" className="mx-3">
                                      <i className="fas fa-edit text-secondary" aria-hidden="true"></i>
                                    </a>
                                    <a href="javascript:;" data-bs-toggle="tooltip" data-bs-original-title="Delete product">
                                      <i className="fas fa-trash text-secondary" aria-hidden="true"></i>
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
