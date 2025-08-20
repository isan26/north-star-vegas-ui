import React, { createContext, useContext } from 'react';
import useUserState from '../hooks/useUserState';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const userStateHook = useUserState();
  
  return (
    <UserContext.Provider value={userStateHook}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
