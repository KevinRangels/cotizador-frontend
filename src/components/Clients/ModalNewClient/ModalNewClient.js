import React from 'react';

export const ModalNewClient = () => {
  return (
    <div className="modal fade" id="newClient" tabindex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="ModalLabel">
              Nuevo cliente
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
                    <div className="multisteps-form__content">
                      <div className="row mt-3">
                        <div className="col-12 col-sm-6">
                          <label>Nombre</label>
                          <input className="multisteps-form__input form-control" type="text" placeholder="eg. Michael" />
                        </div>
                        <div className="col-12 col-sm-6 mt-3 mt-sm-0">
                          <label>Apellido</label>
                          <input className="multisteps-form__input form-control" type="text" placeholder="eg. Prior" />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-12 col-sm-6">
                          <label>Teléfono</label>
                          <input className="multisteps-form__input form-control" type="text" placeholder="eg. Creative Tim" />
                        </div>
                        <div className="col-12 col-sm-6 mt-3 mt-sm-0">
                          <label>Correo electrónico</label>
                          <input className="multisteps-form__input form-control" type="email" placeholder="eg. soft@dashboard.com" />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-12">
                          <label>Dirección</label>
                          <input className="multisteps-form__input form-control" type="text" />
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
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
