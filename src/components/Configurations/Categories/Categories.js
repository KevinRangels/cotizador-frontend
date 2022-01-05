import React from 'react';
import { ModalAddCategories } from './ModalAddCategories';
import { TableCategories } from './TableCategories';

export const Categories = () => {
  return (
    <>
      <div class="card" id="categories">
        <div class="card-header">
          <div class="d-lg-flex">
            <div>
              <h5>Categorías</h5>
              {/* <p class="text-sm">Choose how you receive notifications. These notification settings apply to the things you’re watching.</p> */}
            </div>
            <div class="ms-auto my-auto mt-lg-0 mt-4">
              <div class="ms-auto my-auto">
                <button type="button" class="btn bg-gradient-primary btn-sm mb-0" data-bs-toggle="modal" data-bs-target="#addCategory">
                  +&nbsp; Agregar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body pt-0">
          <TableCategories />
        </div>
      </div>
      <ModalAddCategories />
    </>
  );
};
