import React, { createContext, useContext, useState } from 'react';

const authContext = createContext(null);

export default function AuthProvider({ authApi, children }) {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const signup = async (data) => authApi.signup(data);
  const signin = async (data) =>
    authApi.signin(data).then((data) => {
      setToken(data.token);
      return data;
    });

  return (
    <authContext.Provider value={{ token, signup, signin }}>
      {children}
    </authContext.Provider>
  );
}

export const useAuth = () => useContext(authContext);
