import { Person } from './Person';
import React from 'react';
import { people } from '../../../data';

const List = () => {
  return (
    <>
      <ol>
        {people.map((person) => {
          return <Person key={person.id} person={person} />;
        })}
      </ol>
    </>
  );
};

export default List;
