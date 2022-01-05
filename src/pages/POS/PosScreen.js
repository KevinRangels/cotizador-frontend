import React from 'react';
import { PosResumeBuy } from '../../components/Pos/CounterProductCard/PosResumeBuy';
import { ModalEditProductCart } from '../../components/Pos/ModalEditProductCart/ModalEditProductCart';
import { Product } from '../../components/Pos/Product';
import { ProductCard } from '../../components/Pos/ProductCard';
import { TableProductsPos } from '../../components/Pos/TableProductsPos';
import { Pagination } from '../../components/UI/Pagination/Pagination';

export const PosScreen = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-6">
          <h4>Pos de ventas</h4>
          <p>Realice la compra de productos en stock</p>
        </div>
        <div className="col-lg-6 text-right d-flex flex-column justify-content-center">
          <button type="button" className="btn bg-gradient-primary mb-0 ms-lg-auto me-lg-0 me-auto mt-lg-0 mt-2" data-bs-toggle="modal" data-bs-target="#newRawMaterial">
            Pagar
          </button>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-lg-8">
          <div className="row">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) => (
              <div className="col-md-3">
                <Product />
              </div>
            ))}
          </div>
          <div className="row">
            <div className="d-flex justify-content-end">
              <Pagination />
            </div>
          </div>
          {/* <div class="card h-100">
            <div class="card-body">
              <h5 class="font-weight-bolder">Lista de productos</h5>
              <TableProductsPos />
            </div>
          </div> */}
        </div>
        <div class="col-lg-4">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="font-weight-bolder">Carrito</h5>
              {[1, 2, 3, 4].map((e) => (
                <ProductCard />
              ))}
              <PosResumeBuy />
              <button className="btn btn-primary mt-2">Pagar</button>
            </div>
          </div>
        </div>
      </div>
      <ModalEditProductCart />
    </>
  );
};
