import React from 'react';
import { CounterProductCard } from './CounterProductCard';

export const ProductCard = () => {
  return (
    <li class="list-group-item border-0 justify-content-between ps-0 pb-0 border-radius-lg">
      <div class="d-flex">
        <div class="d-flex align-items-center">
          <div>
            <img src="../../../assets/img/team-2.jpg" class="avatar avatar-sm me-3" alt="avatar image" />
          </div>
          <div class="d-flex flex-column">
            <h6 class="mb-1 text-dark text-sm">Cruz MDF</h6>
            <CounterProductCard />
            {/* <span class="text-xs">Cantidad: 5 unidades</span> */}
            <span class="text-xs">Precio: 100.000 COP</span>
          </div>
        </div>
        {/* <div class="d-flex align-items-center text-danger text-gradient text-sm font-weight-bold ms-auto">- $ 2,500</div> */}
      </div>
      <hr class="horizontal dark mt-3 mb-2" />
    </li>
  );
};
