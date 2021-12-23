import React from 'react';
import { CounterProductCard } from './CounterProductCard/CounterProductCard';

export const ProductCard = () => {
  return (
    <li className="list-group-item border-0 justify-content-between ps-0 pb-0 border-radius-lg">
      <div className="d-flex">
        <div className="d-flex align-items-center">
          <div>
            <img src="../../../assets/img/team-2.jpg" class="avatar avatar-sm me-3" alt="avatar image" />
          </div>
          <div className="d-flex flex-column">
            <h6 className="mb-1 text-dark text-sm">Cruz MDF</h6>
            <CounterProductCard />
            <div className="productCard__price mt-2">
              <span className="">Total: 100.000 $</span>
            </div>
          </div>
        </div>
        {/* <div className="d-flex align-items-center text-danger text-gradient text-sm font-weight-bold ms-auto">- $ 2,500</div> */}
      </div>
      <hr class="horizontal dark mt-3 mb-2" />
    </li>
  );
};
