import React from 'react';

export const PosResumeBuy = () => {
  return (
    <>
      <h6>Resumen de compra</h6>
      <div className="posResume__buy">
        <div className="row">
          <div className="col-6">
            <span className="text-sm">Sub Total:</span>
          </div>
          <div className="col-6 text-end">
            <span className="text-sm">1.200.000 $</span>
          </div>
          <div className="col-6">
            <span className="text-sm">Impuestos:</span>
          </div>
          <div className="col-6 text-end">
            <span className="text-sm">100.000 $</span>
          </div>
          <div className="col-6">
            <span className="text-sm">Total:</span>
          </div>
          <div className="col-6 text-end">
            <span className="text-sm">1.300.000 $</span>
          </div>
        </div>
      </div>
    </>
  );
};
