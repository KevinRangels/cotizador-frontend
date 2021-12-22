import React from 'react';
import { ModalGenerateQuote } from '../../components/Quotes/ModalGenerateQuote';
import { ModalNewQuote } from '../../components/Quotes/ModalNewQuote';
import { TableQuote } from '../../components/Quotes/TableQuote';

export const QuoteProductsScreen = () => {
  return (
    <>
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header pb-0">
              <div class="d-lg-flex">
                <div>
                  <h5 class="mb-0">Cotizador de productos</h5>
                  <p class="text-sm mb-0">Agrega los productos a cotizar</p>
                </div>
                <div class="ms-auto my-auto mt-lg-0 mt-4">
                  <div class="ms-auto my-auto">
                    <button type="button" class="btn bg-gradient-primary btn-sm mb-0" data-bs-toggle="modal" data-bs-target="#newQuote">
                      +&nbsp; Agregar producto
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <TableQuote />
            <div className="d-flex justify-content-end mt-4 card-footer">
              <button class="btn btn-icon bg-gradient-primary" type="button" data-bs-toggle="modal" data-bs-target="#newGenerateQuote">
                <span class="btn-inner--text">Cotizar</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <ModalNewQuote />
      <ModalGenerateQuote />
    </>
  );
};
