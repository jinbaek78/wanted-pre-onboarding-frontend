import React, { useState } from 'react';
import useValidation, {
  ERROR_MESSAGE,
  SUCCESS_MESSAGE,
} from '../hooks/useValidation';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValidate, resultEmailMessage] = useValidation('email', email);
  const [isPasswordValidate, resultPasswordMessage] = useValidation(
    'password',
    password
  );

  console.log(isEmailValidate, isPasswordValidate);

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
        회원가입
      </header>
      <form onSubmit={handleSubmit}>
        <div className=" h-10 border border-zinc-300 p-1 my-2">
          <input
            data-testid="email-input"
            className="w-full h-full outline-none focus:outline-sky-300 focus:outline-3"
            placeholder="이메일(아이디로 사용됩니다)"
            onChange={handleEmailChange}
            value={email}
          />

          <p
            className={
              resultEmailMessage === SUCCESS_MESSAGE.email
                ? 'text-sm text-zinc-500 mt-2'
                : resultEmailMessage === ERROR_MESSAGE.email
                ? 'text-sm text-red-300 mt-2'
                : 'text-sm text-zinc-300 mt-2'
            }
          >
            {resultEmailMessage}
          </p>
        </div>

        <div className=" h-10 border border-zinc-300 p-1 mt-8 mb-1">
          <input
            data-testid="password-input"
            className="w-full h-full outline-none focus:outline-sky-300 focus:outline-3"
            placeholder="비밀번호"
            onChange={handlePasswordChange}
            value={password}
          />
          <p
            className={
              resultPasswordMessage === SUCCESS_MESSAGE.password
                ? 'text-sm text-zinc-500 mt-2'
                : resultPasswordMessage === ERROR_MESSAGE.password
                ? 'text-sm text-red-300 mt-2'
                : 'text-sm text-zinc-300 mt-2'
            }
          >
            {resultPasswordMessage}
          </p>
        </div>

        <button
          data-testid="signup-button"
          type="submit"
          disabled={!isEmailValidate || !isPasswordValidate}
          className="w-full h-10 bg-[#c0e1f7] text-xl mt-10 disabled:bg-zinc-200"
        >
          회원가입
        </button>
      </form>
    </>
  );
}
