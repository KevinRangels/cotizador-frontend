import React from 'react';

export const QuoteStep3 = () => {
  return (
    <div class="multisteps-form__panel p-3 border-radius-xl" data-animation="FadeIn" style={{ position: 'relative' }}>
      <h5 class="font-weight-bolder">Socials</h5>
      <div class="multisteps-form__content">
        <div class="row mt-3">
          <div class="col-12">
            <label>Twitter Handle</label>
            <input class="multisteps-form__input form-control" type="text" placeholder="@soft" />
          </div>
          <div class="col-12 mt-3">
            <label>Facebook Account</label>
            <input class="multisteps-form__input form-control" type="text" placeholder="https://..." />
          </div>
          <div class="col-12 mt-3">
            <label>Instagram Account</label>
            <input class="multisteps-form__input form-control" type="text" placeholder="https://..." />
          </div>
        </div>
        <div class="row">
          <div class="button-row d-flex mt-4 col-12">
            <button class="btn bg-gradient-light mb-0 js-btn-prev" type="button" title="Prev">
              Atrás
            </button>
            <button class="btn bg-gradient-dark ms-auto mb-0 js-btn-next" type="button" title="Next">
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
