import React from 'react';
import { ModalNewQuote } from '../../components/Quotes/ModalNewQuote';

export const QuoteScreen = () => {
  return (
    <>
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header pb-0">
              <div class="d-lg-flex">
                <div>
                  <h5 class="mb-0">Cotizador</h5>
                  <p class="text-sm mb-0">lorem ipsum</p>
                </div>
                <div class="ms-auto my-auto mt-lg-0 mt-4">
                  <div class="ms-auto my-auto">
                    <button type="button" class="btn bg-gradient-primary btn-sm mb-0" data-bs-toggle="modal" data-bs-target="#newQuote">
                      +&nbsp; Nueva Cotización
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body px-0 pb-0">{/* <TableUsers /> */}</div>
          </div>
        </div>
      </div>
      <ModalNewQuote />
    </>
  );
};
