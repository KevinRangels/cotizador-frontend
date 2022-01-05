import React from 'react';

export const ModalAddCategories = () => {
  return (
    <div className="modal fade" id="addCategory" tabindex="-1" aria-hidden="true">
      <div className="modal-dialog  modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="ModalLabel">
              Agregar Categoría
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-12 mb-2">
                <label>Nombre</label>
                <input className="multisteps-form__input form-control" type="text" />
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
