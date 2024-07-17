import React, { useContext } from 'react';
import { UserContext } from './Navbar';

const UserContainer = () => {
  //this hook helps in accessing the context value, hence don't have to use consumer
  const { user, logout } = useContext(UserContext);
  return (
    <div className="user-container">
      {user && <p>Hello there, {user.name}</p>}
      {user && (
        <button className="btn" onClick={logout}>
          logout
        </button>
      )}
      {!user && <button className="btn">login</button>}
    </div>
  );
};
export default UserContainer;
