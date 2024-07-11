import { useState } from 'react';

//instead of using if else statements inside return of JSX (which is not allowed), we can use short circuit evaluation to conditionally render elements

const SomeComponent = ({ name }) => {
  return <h1>{name}</h1>;
};

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      {/*conditionally render elements using short circuit evaluation*/}
      <h2>{!isEditing && 'No one editing'}</h2>
      {isEditing && (
        <>
          <h1>Editing</h1>
          <h2>{name}</h2>
        </>
      )}
      {/* conditomally render components */}
      {user && <SomeComponent name={user.name} />}

      <button className="btn" onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'edit' : 'add'}
      </button>
    </div>
  );
};

export default ShortCircuitExamples;
