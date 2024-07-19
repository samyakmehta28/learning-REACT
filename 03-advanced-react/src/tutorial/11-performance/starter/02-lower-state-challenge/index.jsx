import { useState } from 'react';
import { data } from '../../../../data';
import List from './List';
import FormAddName from './FormAddName';
const LowerStateChallenge = () => {
  const [people, setPeople] = useState(data);

  return (
    <section>
      <FormAddName people={people} setPeople={setPeople} />
      <List people={people} />
    </section>
  );
};
export default LowerStateChallenge;
