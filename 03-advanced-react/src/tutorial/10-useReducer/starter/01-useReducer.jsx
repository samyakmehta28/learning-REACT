import React from 'react';
import { useState, useReducer } from 'react';
import { reducer, defaultState } from './reducer';

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  //const [people, setPeople] = useState(data);

  // const removeItem = (id) => {
  // let newPeople = people.filter((person) => person.id !== id);
  // setPeople(newPeople);
  // };
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => dispatch({ type: 'REMOVE_ITEM', id: id })}>
              remove
            </button>
          </div>
        );
      })}
      {state.people?.[0] ? (
        <button
          className="btn"
          style={{ marginTop: '2rem' }}
          onClick={() => dispatch({ type: 'CLEAR_ALL' })}
        >
          clear items
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: '2rem' }}
          onClick={() => dispatch({ type: 'RESET_ALL' })}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
