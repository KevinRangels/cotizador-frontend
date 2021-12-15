import React from 'react';

export const QuoteStep1 = () => {
  return (
    <div className="multisteps-form__panel p-3 border-radius-xl  js-active" data-animation="FadeIn" style={{ position: 'relative' }}>
      <h5 className="font-weight-bolder mb-3">Resultados de cotización</h5>
      <div className="multisteps-form__content">
        <div className="row">
          <div className="col-12 col-sm-6">
            <label>Costo corte y grabado:</label>
            <input className="multisteps-form__input form-control" type="text" value={'300.000 $'} disabled={true} />
          </div>
          <div className="col-12 col-sm-6 mt-3 mt-sm-0">
            <label>Costo pieza material:</label>
            <input className="multisteps-form__input form-control" type="text" value={'200.000 $'} disabled={true} />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 col-sm-6">
            <label>Piezas Cotizadas:</label>
            <input className="multisteps-form__input form-control" type="text" value={'30 piezas'} disabled={true} />
          </div>
          <div className="col-12 col-sm-6 mt-3 mt-sm-0">
            <label>Precio total:</label>
            <input className="multisteps-form__input form-control" type="email" value={'1.000.000 $'} disabled={true} />
          </div>
        </div>
      </div>
      <hr />
      <h5 className="font-weight-bolder mb-3">Porcentaje y Ganancia </h5>
      <div className="multisteps-form__content">
        <div className="row">
          <div className="col-12 col-sm-6">
            <label>Porcentaje Material </label>
            <input className="multisteps-form__input form-control" type="text" value={'5%'} disabled={true} />
          </div>
          <div className="col-12 col-sm-6 mt-3 mt-sm-0">
            <label>Porcentaje Laser</label>
            <input className="multisteps-form__input form-control" type="text" value={'45%'} disabled={true} />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6">
            <label>Porcentaje Mano de obra</label>
            <input className="multisteps-form__input form-control" type="text" value={'20%'} disabled={true} />
          </div>
        </div>
      </div>
      <hr />
      <h5 className="font-weight-bolder mb-3">Resultados de cotización</h5>
      <div className="multisteps-form__content">
        <div className="row">
          <div className="col-12 col-sm-6">
            <label>Costo Neto total:</label>
            <input className="multisteps-form__input form-control" type="text" value={'70.000 $'} disabled={true} />
          </div>
          <div className="col-12 col-sm-6 mt-3 mt-sm-0">
            <label>Precio 1:</label>
            <input className="multisteps-form__input form-control" type="text" value={'150.000 $'} disabled={true} />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 col-sm-6">
            <label>Precio 2:</label>
            <input className="multisteps-form__input form-control" type="text" value={'120.000 $'} disabled={true} />
          </div>
          <div className="col-12 col-sm-6 mt-3 mt-sm-0">
            <label>Precio 3:</label>
            <input className="multisteps-form__input form-control" type="email" value={'100.000 $'} disabled={true} />
          </div>
        </div>
        <div className="row">
          <div className="button-row d-flex mt-4 col-12">
            <button className="btn bg-gradient-dark ms-auto mb-0 js-btn-next" type="button" title="Next">
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
