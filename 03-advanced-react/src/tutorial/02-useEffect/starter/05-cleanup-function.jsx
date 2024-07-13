import React, { useState, useEffect } from 'react';

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        Toggle
      </button>
      {toggle && <WelcomeComponent />}
    </>
  );
};

const WelcomeComponent = () => {
  useEffect(() => {
    const someFunc = () => {
      console.log('Hello World');
    };
    //will be created everytime this component is rendered
    window.addEventListener('scroll', someFunc);

    //this will help us destroy the event listener once component is removed
    return () => {
      window.removeEventListener('scroll', someFunc);
    };
  }, []);

  return <h1>Welcome Component</h1>;
};

export default CleanupFunction;
