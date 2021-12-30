import React from 'react';
import { ModalNewClient } from '../../components/Clients/ModalNewClient/ModalNewClient';
import { TableClients } from '../../components/Clients/TableClients/TableClients';

export const ClientsScreen = () => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header pb-0">
              <div className="d-lg-flex">
                <div>
                  <h5 className="mb-0">Clientes</h5>
                  <p className="text-sm mb-0">Administra tus clientes</p>
                </div>
                <div className="ms-auto my-auto mt-lg-0 mt-4">
                  <div className="ms-auto my-auto">
                    <button type="button" className="btn bg-gradient-primary btn-sm mb-0" data-bs-toggle="modal" data-bs-target="#newClient">
                      +&nbsp; Nuevo Cliente
                    </button>
                    <button type="button" className="btn btn-outline-primary btn-sm mb-0 mx-2" data-bs-toggle="modal" data-bs-target="#import">
                      Importar
                    </button>
                    <div className="modal fade" id="import" tabindex="-1" aria-hidden="true">
                      <div className="modal-dialog mt-lg-10">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="ModalLabel">
                              Import CSV
                            </h5>
                            <i className="fas fa-upload ms-3"></i>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="modal-body">
                            <p>You can browse your computer for a file.</p>
                            <input type="text" placeholder="Browse file..." className="form-control mb-3" />
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" value="" id="importCheck" checked="" />
                              <label className="custom-control-label" for="importCheck">
                                I accept the terms and conditions
                              </label>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn bg-gradient-secondary btn-sm" data-bs-dismiss="modal">
                              Close
                            </button>
                            <button type="button" className="btn bg-gradient-primary btn-sm">
                              Upload
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="btn btn-outline-primary btn-sm export mb-0 mt-sm-0 mt-1" data-type="csv" type="button" name="button">
                      Exportar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body px-0 pb-0">
              <TableClients />
            </div>
          </div>
        </div>
      </div>
      <ModalNewClient />
    </>
  );
};
