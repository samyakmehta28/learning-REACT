import { data } from '../../../data';
import React, { useState } from 'react';

const Users = ({ users, setUsers }) => {
  const removeUser = (id) => {
    return () => {
      setUsers(users.filter((user) => user.id !== id));
    };
  };

  return (
    <>
      <h2>Users List</h2>
      <ul>
        {users.map((user) => {
          return (
            <div key={user.id}>
              <h3>{user.name}</h3>
              <button className="btn" onClick={removeUser(user.id)}>
                Remove
              </button>
            </div>
          );
        })}
      </ul>
    </>
  );
};

const UserChallenge = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
      const newUser = { id: newId, name };
      setUsers([...users, newUser]);
      setName('');
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}

      <Users users={users} setUsers={setUsers} />
    </div>
  );
};
export default UserChallenge;
