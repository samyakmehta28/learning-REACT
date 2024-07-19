import { useState, useCallback } from 'react';
import { data } from '../../../../data';
import List from './List';

const LowerState = () => {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);
  console.log('LowerState component rendered');

  const removeItem = useCallback(
    (id) => {
      setPeople((oldPeople) => {
        let newPeople = oldPeople.filter((person) => person.id !== id);
        return newPeople;
      });
    },
    [people]
  );
  return (
    <section>
      <button
        className="btn"
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: '1rem' }}
      >
        count {count}
      </button>
      <List people={people} removeItem={removeItem} />
    </section>
  );
};
export default LowerState;
