import React from 'react';

export const QuoteStep2 = () => {
  return (
    <div class="multisteps-form__panel p-3 border-radius-xl" data-animation="FadeIn" style={{ position: 'relative' }}>
      <h5 class="font-weight-bolder">Address</h5>
      <div class="multisteps-form__content">
        <div class="row mt-3">
          <div class="col">
            <label>Address 1</label>
            <input class="multisteps-form__input form-control" type="text" placeholder="eg. Street 111" />
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <label>Address 2</label>
            <input class="multisteps-form__input form-control" type="text" placeholder="eg. Street 221" />
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-12 col-sm-6">
            <label>City</label>
            <input class="multisteps-form__input form-control" type="text" placeholder="eg. Tokyo" />
          </div>
          <div class="col-6 col-sm-3 mt-3 mt-sm-0">
            <label>State</label>
            <select class="multisteps-form__select form-control">
              <option selected="selected">...</option>
              <option value="1">State 1</option>
              <option value="2">State 2</option>
            </select>
          </div>
          <div class="col-6 col-sm-3 mt-3 mt-sm-0">
            <label>Zip</label>
            <input class="multisteps-form__input form-control" type="text" placeholder="7 letters" />
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
