import React, { createContext } from 'react';

import useAuth from './hooks/useAuth';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { loading, handleLogin, handleLogout, authenticated, user } = useAuth();

  return (
    <AuthContext.Provider
      value={{ loading, handleLogin, handleLogout, authenticated, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
