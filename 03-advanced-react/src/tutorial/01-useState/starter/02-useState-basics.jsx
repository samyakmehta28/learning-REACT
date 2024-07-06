import React, { useState } from 'react';

const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  const countHandler = () => {
    setCount(count + 1);
  };

  const countReset = () => {
    setCount(0);
  };
  return (
    <>
      <h2>{count}</h2>
      <div>
        <button className="btn" onClick={countHandler}>
          Increase
        </button>
        <button className="btn" onClick={countReset}>
          Reset
        </button>
      </div>
    </>
  );
};

export default UseStateBasics;
