import React from 'react';

export const QuoteStep2 = () => {
  return (
    <div class="multisteps-form__panel p-3 border-radius-xl" data-animation="FadeIn" style={{ position: 'relative' }}>
      <h5 class="font-weight-bolder">Datos del cliente</h5>
      <div class="multisteps-form__content">
        <div class="row mt-3">
          <div class="col-md-4">
            <label>Nombre</label>
            <input class="multisteps-form__input form-control" type="text" />
          </div>
          <div class="col-md-4">
            <label>Apellido</label>
            <input class="multisteps-form__input form-control" type="text" />
          </div>
          <div class="col-md-4">
            <label>Teléfono</label>
            <input class="multisteps-form__input form-control" type="text" />
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-4">
            <label>Nro identificación</label>
            <input class="multisteps-form__input form-control" type="text" />
          </div>
          <div class="col-md-4">
            <label>Correo electrónico</label>
            <input class="multisteps-form__input form-control" type="text" />
          </div>
          <div class="col-md-4">
            <label>Nro identificación</label>
            <input class="multisteps-form__input form-control" type="text" />
          </div>
        </div>

        <div class="button-row d-flex mt-4">
          <button class="btn bg-gradient-light mb-0 js-btn-prev" type="button" title="Prev">
            Atrás
          </button>
          <button class="btn bg-gradient-dark ms-auto mb-0 js-btn-next" type="button" title="Next">
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};
