import NavLinks from './NavLinks';
import { useState, createContext } from 'react';

export const UserContext = createContext();

const Navbar = () => {
  const [user, setUser] = useState({ name: 'john' });
  const logout = () => {
    setUser(null);
  };
  return (
    <UserContext.Provider value={{ user, logout }}>
      <nav className="navbar">
        <h5>Context API</h5>
        <NavLinks />
      </nav>
    </UserContext.Provider>
  );
};
export default Navbar;
