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
    <div className="productCard__counter">
      <button className="icon icon-shape icon-sm shadow border-radius-md bg-white" onClick={() => handleBtnsCounter(false)}>
        <i className="fas fa-minus"></i>
      </button>
      <input className="" type="text" value={counter}></input>
      <button className="icon icon-shape icon-sm shadow border-radius-md bg-white" onClick={() => handleBtnsCounter(true)}>
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
};
