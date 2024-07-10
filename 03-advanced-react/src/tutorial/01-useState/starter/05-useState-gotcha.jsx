import React, { useState } from 'react';

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const clickHandler = () => {
    setTimeout(() => {
      setValue((currentValue) => currentValue + 1);
    }, 2000);
  };

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={clickHandler}>
        Click me
      </button>
    </>
  );
};

export default UseStateGotcha;
