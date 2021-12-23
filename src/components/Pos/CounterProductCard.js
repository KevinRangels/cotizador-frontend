import React, { useState } from 'react';

export const CounterProductCard = () => {
  const [counter, setCounter] = useState(1);

  const handleBtnsCounter = (operation) => {
    if (operation) {
      setCounter(counter + 1);
    } else {
      if (counter > 1) {
        setCounter(counter - 1);
      }
    }
  };
  return (
    <div className="productCard__counter d-flex align-items-center w-100">
      <button
        className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center"
        onClick={() => handleBtnsCounter(false)}
      >
        -
      </button>
      <input className="w-25 mx-2 text-center" type="text" value={counter}></input>
      <button
        className="icon icon-shape icon-sm shadow border-radius-md bg-white text-center d-flex align-items-center justify-content-center"
        onClick={() => handleBtnsCounter(true)}
      >
        +
      </button>
    </div>
  );
};
