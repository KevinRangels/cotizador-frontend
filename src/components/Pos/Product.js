import React from 'react';

export const Product = () => {
  return (
    <div class="card mb-4">
      <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
        <a href="javascript:;" class="d-flex justify-content-center">
          <img
            src="https://http2.mlstatic.com/D_NQ_NP_2X_911364-MCO41387646367_042020-F.webp"
            class="img-fluid border-radius-lg"
            alt="product"
            style={{
              height: '100px',
            }}
          />
        </a>
      </div>

      <div class="card-body pt-2 pb-0">
        <span class="text-gradient text-primary text-uppercase text-xs font-weight-bold my-2">10.000 COP</span>
        <p class="card-title h5 d-block text-darker text-sm">Shared</p>
      </div>
    </div>
  );
};
