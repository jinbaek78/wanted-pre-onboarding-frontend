import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TodoItem from '../components/TodoItem';
import { useAuth } from '../context/AuthContext';
import useTodos from '../hooks/useTodos';

export default function Todo({ todosApi }) {
  const { token } = useAuth();
  const { state } = useLocation();
  const todos = useTodos(todosApi);

  const navigate = useNavigate();
  useEffect(() => {
    if (!token && !state) {
      navigate('/signin');
    }
  }, [state, token, navigate]);
  return (
    <>
      <header className="text-2xl border-b border-b-zinc-300 mb-5 py-4">
        TODO LIST
      </header>
      <div className="mb-3">
        <input className="p-1 px-2 outline rounded-sm" type="text" />
        <button className="bg-sky-300  ml-3 outline p-1 ">추가</button>
      </div>
      <ul>
        {todos?.map?.((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
}
