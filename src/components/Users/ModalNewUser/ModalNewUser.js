import React from 'react';

export const ModalNewUser = () => {
  return (
    <div class="modal fade" id="newUser" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalLabel">
              Nuevo usuario
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
                      <div class="row mt-3">
                        <div class="col-12 col-sm-6">
                          <label>Nombre</label>
                          <input class="multisteps-form__input form-control" type="text" placeholder="eg. Michael" />
                        </div>
                        <div class="col-12 col-sm-6 mt-3 mt-sm-0">
                          <label>Apellido</label>
                          <input class="multisteps-form__input form-control" type="text" placeholder="eg. Prior" />
                        </div>
                      </div>
                      <div class="row mt-3">
                        <div class="col-12 col-sm-6">
                          <label>Teléfono</label>
                          <input class="multisteps-form__input form-control" type="text" placeholder="eg. Creative Tim" />
                        </div>
                        <div class="col-12 col-sm-6 mt-3 mt-sm-0">
                          <label>Correo electrónico</label>
                          <input class="multisteps-form__input form-control" type="email" placeholder="eg. soft@dashboard.com" />
                        </div>
                      </div>
                      <div class="row mt-3">
                        <div class="col-12 col-sm-6">
                          <label>Rol</label>
                          <select class="form-control" name="choices-sizes" id="choices-sizes">
                            <option value="" selected="">
                              Seleccionar
                            </option>
                            <option value="Choice 1">Super Admin</option>
                            <option value="Choice 2">Administrador</option>
                            <option value="Choice 3">Operador</option>
                          </select>
                        </div>
                        <div class="col-12 col-sm-6">
                          <label>Contraseña</label>
                          <input class="multisteps-form__input form-control" type="password" placeholder="******" />
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
              Crear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
