import React, { useState, useEffect } from 'react';
import { getLocalStorage } from '../utils/LocalStorage';

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const refreshUserData = () => {  //if user makes change we need to refresh every time by fetching data from local storage every time
    const { employees, admin } = getLocalStorage() || {};
    setUserData({ employees, admin });
  };

  useEffect(() => {
    refreshUserData();
  }, []); // so that initial context is set when logged in and made no changes

  return (
    <AuthContext.Provider value={{ ...userData, refreshUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;