import React, { useState } from 'react';

const LoggedInComponent = ({ user, setUser }) => {
  const logout = () => {
    setUser(null);
  };

  return (
    <>
      <h4>Welcome {user.name}</h4>
      <button className="btn" onClick={logout}>
        Logout
      </button>
    </>
  );
};

const LoggedOutComponent = ({ user, setUser }) => {
  const login = () => {
    setUser({ name: 'john doe' });
  };

  return (
    <>
      <h4>Please login</h4>
      <button className="btn" onClick={login}>
        LogIn
      </button>
    </>
  );
};

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  return (
    <div>
      {user ? (
        <LoggedInComponent user={user} setUser={setUser} />
      ) : (
        <LoggedOutComponent usee={user} setUser={setUser} />
      )}
    </div>
  );
};

export default UserChallenge;
