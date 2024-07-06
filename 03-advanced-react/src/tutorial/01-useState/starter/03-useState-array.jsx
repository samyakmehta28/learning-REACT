import { data } from '../../../data';
import React, { useState } from 'react';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      <div>
        {people.map((person) => {
          return (
            <div key={person.id}>
              <h2>{person.name}</h2>
              <button className="btn" onClick={() => removePerson(person.id)}>
                Remove Item
              </button>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: '2rem' }}>
        <button className="btn" onClick={() => setPeople([])}>
          Clear Items
        </button>
      </div>
    </>
  );
};

export default UseStateArray;
