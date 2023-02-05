import React, { createContext, useContext, useState } from 'react';

const authContext = createContext(null);

export default function AuthProvider({ auth, children }) {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const signup = async (data) =>
    auth.signup(data).catch((err) => {
      if (err.response.data.statusCode === 400) {
        return { errorMessage: '이미 가입한 계정이에요' };
      } else {
        return { errorMessage: '서버문제나 다른 문제가 발생했어요.' };
      }
    });
  const signin = async (data) =>
    auth
      .signin(data)
      .then((data) => {
        setToken(data['access_token']);
        return data;
      })
      .catch((err) => {
        if (err.response.data.statusCode === 404) {
          return { errorMessage: '아이디 또는 비밀번호가 일치하지 않아요' };
        } else {
          return { errorMessage: '서버문제나 다른 문제가 발생했어요.' };
        }
      });
  return (
    <authContext.Provider value={{ token, signup, signin }}>
      {children}
    </authContext.Provider>
  );
}

export const useAuth = () => useContext(authContext);
