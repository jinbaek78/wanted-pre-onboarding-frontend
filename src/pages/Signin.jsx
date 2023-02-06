import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';

export default function Signin({ authApi }) {
  const { state } = useLocation();
  const [email, setEmail] = useState(state ? state.email : '');
  const [password, setPassword] = useState(state ? state.password : '');

  const [signinErrorMessage, setSigninErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginClick = () => {
    authApi.signin({ email, password }).then((data) => {
      if (data?.token) {
        return navigate('/todo', {});
      }
      setSigninErrorMessage(data.errorMessage);
    });
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/todo');
    }
  }, [navigate]);

  return (
    <>
      <Header name="로그인" />
      <form onSubmit={handleSubmit}>
        <div className=" h-10 border border-zinc-300 p-1 my-2">
          <input
            data-testid="email-input"
            className="w-full h-full outline-none focus:outline-sky-300 focus:outline-3 p-2"
            placeholder="이메일"
            onChange={handleEmailChange}
            value={email}
          />
        </div>

        <div className=" h-10 border border-zinc-300 p-1 mt-1 mb-1">
          <input
            data-testid="password-input"
            className="w-full h-full outline-none focus:outline-sky-300 focus:outline-3 p-2"
            placeholder="비밀번호"
            onChange={handlePasswordChange}
            type="password"
            value={password}
          />
        </div>

        <button
          data-testid="signup-button"
          type="submit"
          disabled={false}
          className="w-full h-10 bg-[#c0e1f7] text-xl mt-10 disabled:bg-zinc-200"
          onClick={handleLoginClick}
        >
          로그인
        </button>
        {signinErrorMessage && (
          <p className="text-red-500">{signinErrorMessage}</p>
        )}
      </form>
    </>
  );
}
