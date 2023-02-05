import React, { useState } from 'react';
export const DEFAULT_MESSAGE = {
  email: '이메일은 @을 포함해야 해요',
  password: '비밀번호는 8자 이상 입력해 주셔야 해요',
};

export default function Signup() {
  return (
    <>
      <header className="text-2xl border-b border-b-zinc-300 mb-5 py-4">
        회원가입
      </header>
      <form>
        <div className=" h-10 border border-zinc-300 p-1 my-2">
          <input
            data-testid="email-input"
            className="w-full h-full p-1 outline-none focus:outline-sky-300 focus:outline-3"
            placeholder="이메일(아이디로 사용됩니다)"
          />
          <p className="text-sm text-zinc-300 mt-2">{DEFAULT_MESSAGE.email}</p>
        </div>

        <div className=" h-10 border border-zinc-300 p-1 mt-8 mb-1">
          <input
            data-testid="password-input"
            className="w-full h-full p-1 outline-none focus:outline-sky-300 focus:outline-3"
            placeholder="비밀번호"
          />
          <p className="text-sm text-zinc-300 mt-2">
            {DEFAULT_MESSAGE.password}
          </p>
        </div>

        <button
          data-testid="signup-button"
          type="submit"
          disabled={false}
          className="w-full h-10 bg-[#c0e1f7] text-xl mt-10 disabled:bg-zinc-200"
        >
          회원가입
        </button>
      </form>
    </>
  );
}
