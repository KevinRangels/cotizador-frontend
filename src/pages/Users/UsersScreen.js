import React from 'react';
import { ModalNewUser } from '../../components/Users/ModalNewUser/ModalNewUser';
import { TableUsers } from '../../components/Users/TableUsers/TableUsers';

export const UsersScreen = () => {
  return (
    <>
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header pb-0">
              <div class="d-lg-flex">
                <div>
                  <h5 class="mb-0">Usuarios</h5>
                  <p class="text-sm mb-0">Administra tus usuarios y sus roles</p>
                </div>
                <div class="ms-auto my-auto mt-lg-0 mt-4">
                  <div class="ms-auto my-auto">
                    <button type="button" class="btn bg-gradient-primary btn-sm mb-0" data-bs-toggle="modal" data-bs-target="#newUser">
                      +&nbsp; Nuevo Usuario
                    </button>
                    <button type="button" class="btn btn-outline-primary btn-sm mb-0 mx-2" data-bs-toggle="modal" data-bs-target="#import">
                      Importar
                    </button>
                    <div class="modal fade" id="import" tabindex="-1" aria-hidden="true">
                      <div class="modal-dialog mt-lg-10">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="ModalLabel">
                              Import CSV
                            </h5>
                            <i class="fas fa-upload ms-3"></i>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            <p>You can browse your computer for a file.</p>
                            <input type="text" placeholder="Browse file..." class="form-control mb-3" />
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="importCheck" checked="" />
                              <label class="custom-control-label" for="importCheck">
                                I accept the terms and conditions
                              </label>
                            </div>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn bg-gradient-secondary btn-sm" data-bs-dismiss="modal">
                              Close
                            </button>
                            <button type="button" class="btn bg-gradient-primary btn-sm">
                              Upload
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button class="btn btn-outline-primary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button">
                      Exportar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body px-0 pb-0">
              <TableUsers />
            </div>
          </div>
        </div>
      </div>
      <ModalNewUser />
    </>
  );
};
