import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TodoItem from '../components/TodoItem';
import { useAuth } from '../context/AuthContext';

export default function Todo() {
  const { token } = useAuth();
  const { state } = useLocation();
  const todos = [
    {
      id: 1992,
      todo: 'todo1',
      isCompleted: false,
      userId: 1075,
    },
    {
      id: 1993,
      todo: 'todo2',
      isCompleted: false,
      userId: 1075,
    },
    {
      id: 1994,
      todo: 'todo3',
      isCompleted: false,
      userId: 1075,
    },
    {
      id: 1995,
      todo: 'todo4',
      isCompleted: false,
      userId: 1075,
    },
    {
      id: 2047,
      todo: 'todo5',
      isCompleted: false,
      userId: 1075,
    },
    {
      id: 2048,
      todo: 'todo6',
      isCompleted: false,
      userId: 1075,
    },
  ];
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
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
}
