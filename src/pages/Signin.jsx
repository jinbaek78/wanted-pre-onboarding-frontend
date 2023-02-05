import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Signin() {
  const { state } = useLocation();
  console.log('state: ', state);
  const [email, setEmail] = useState(state ? state.email : '');
  const [password, setPassword] = useState(state ? state.password : '');

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <header className="text-2xl border-b border-b-zinc-300 mb-5 py-4">
        로그인
      </header>
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
        >
          로그인
        </button>
      </form>
    </>
  );
}
