import React from 'react';
import {useState, useContext, createContext} from 'react';

// import { createContext } from 'react';

const AdminContext = React.createContext({ email: '', auth: false });

const AdminProvider = ({ children }) => {
  // Admin is the email of the "data" that gets stored in context
  const [admin, setAdmin] = useState({ email: '', auth: true });

  // Login updates the Admin data with a email parameter
  const loginContext = (email) => {
    setAdmin((admin) => ({
      email: email,
      auth: true,
    }));
  };

  // Logout updates the Admin data to default
  const logout = () => {
    localStorage.removeItem('token');
    setAdmin((admin) => ({
      email: '',
      auth: false,
    }));
  };

  return (
    <AdminContext.Provider value={{ admin, loginContext, logout }}>
      {children}
    </AdminContext.Provider>
  );
}

export { AdminProvider, AdminContext };