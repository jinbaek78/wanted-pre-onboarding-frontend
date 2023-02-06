import React from 'react';
import { useNavigate } from 'react-router-dom';

const mapKoToEng = {
  홈: '',
  로그인: 'signin',
  회원가입: 'signup',
  '투두 리스트': 'todo',
};
const routes = ['홈', '로그인', '회원가입', '투두 리스트'];
export default function Header({ name }) {
  const navigate = useNavigate();
  const otherRoutes = routes.filter((route) => route !== name);
  return (
    <header
      className={
        name
          ? 'text-2xl flex justify-between border-b border-b-zinc-300 mb-5 py-4'
          : 'text-2xl flex border-b border-b-zinc-300 mb-5 py-4'
      }
    >
      <p className="flex items-center">{name}</p>
      <div className="flex">
        {otherRoutes.map((routes) => (
          <button
            className="p-1"
            onClick={() => navigate(`/${mapKoToEng[routes]}`)}
            key={routes}
          >
            {routes}
          </button>
        ))}
      </div>
    </header>
  );
}
