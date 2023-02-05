import React, { createContext, useContext, useState } from 'react';

const authContext = createContext(null);

export default function AuthProvider({ auth, children }) {
  const [token, setToken] = useState(null);
  const signup = async (data) =>
    auth.signup(data).catch((err) => {
      if (err.message.includes('400')) {
        return { errorMessage: '이미 가입한 계정이에요' };
      } else {
        return { errorMessage: '서버문제나 다른 문제가 발생했어요.' };
      }
    });
  return (
    <authContext.Provider value={{ token, signup }}>
      {children}
    </authContext.Provider>
  );
}

export const useAuth = () => useContext(authContext);
