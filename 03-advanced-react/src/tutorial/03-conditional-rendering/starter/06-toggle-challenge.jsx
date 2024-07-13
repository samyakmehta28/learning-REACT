import React, { useState } from 'react';

const ToggleChallenge = () => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div>
      <button className="btn" onClick={() => setShowAlert(!showAlert)}>
        {(!showAlert && <>Toggle Alert</>) || <>Hide Alert</>}
      </button>
      {showAlert && <Alert />}
    </div>
  );
};

const Alert = () => {
  return <div className="alert alert-danger">Hello World!</div>;
};

export default ToggleChallenge;
