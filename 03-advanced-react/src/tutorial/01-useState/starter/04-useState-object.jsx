import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 24,
    hobby: 'read books',
  });

  const displayPerson = () => {
    const newPerson = { name: 'John', age: 30, hobby: 'play games' };
    setPerson(newPerson);
  };
  const { name, age, hobby } = person;
  return (
    <>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{hobby}</h2>
      <button className="btn" onClick={displayPerson}>
        Change Name
      </button>
    </>
  );
};

export default UseStateObject;
