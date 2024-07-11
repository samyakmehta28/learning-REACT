import { useState } from 'react';

const ShortCircuitOverview = () => {
  const [dummy, setDummy] = useState('dummy value');
  const [name, setName] = useState('john doe');

  return (
    <div>
      <h4> {dummy || name}</h4>

      <h4> {dummy && name} </h4>
    </div>
  );
};
export default ShortCircuitOverview;
