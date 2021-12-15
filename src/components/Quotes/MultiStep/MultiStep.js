import React, { useEffect } from 'react';
import { multiStep } from '../../../assets/plugins/multistep-form';
import { QuoteStep1 } from './QuoteStep1';
import { QuoteStep2 } from './QuoteStep2';
import { QuoteStep3 } from './QuoteStep3';

export const MultiStep = () => {
  useEffect(() => {
    multiStep();
  }, []);
  return (
    <div class="multisteps-form">
      <div class="row">
        <div class="col-12 col-lg-8 mx-auto mt-5 mb-3">
          <div class="multisteps-form__progress">
            <button class="multisteps-form__progress-btn js-active" type="button" title="User Info">
              <span>Tarifas</span>
            </button>
            <button class="multisteps-form__progress-btn" type="button" title="Address">
              Cliente
            </button>
            <button class="multisteps-form__progress-btn" type="button" title="Socials">
              Enviar
            </button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-lg-10 m-auto">
          <form class="multisteps-form__form" style={{ height: 'auto' }}>
            <QuoteStep1 />
            <QuoteStep2 />
            <QuoteStep3 />
          </form>
        </div>
      </div>
    </div>
  );
};
