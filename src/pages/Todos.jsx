import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import TodoItem from '../components/TodoItem';
import { useAuth } from '../context/AuthContext';
import useTodos from '../hooks/useTodos';

export default function Todo({ todosApi }) {
  const { token } = useAuth();
  const { state } = useLocation();
  const [todos, addTodo, updateTodo, deleteTodo] = useTodos(todosApi);
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  const handleAddClick = () => {
    addTodo(text);
    setText('');
  };
  useEffect(() => {
    if (!token && !state) {
      navigate('/signin');
    }
  }, [state, token, navigate]);
  return (
    <>
      <Header name="TODO LIST" />
      <div className="mb-3">
        <input
          data-testid="new-todo-input"
          className="p-1 px-2 outline rounded-sm focus:outline-sky-300 focus:outline-2"
          type="text"
          value={text}
          onChange={handleTextChange}
        />
        <button
          data-testid="new-todo-add-button"
          className="bg-sky-300  ml-3 outline p-1 "
          onClick={handleAddClick}
        >
          추가
        </button>
      </div>
      <ul>
        {todos?.map?.((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onUpdate={updateTodo}
            onDelete={deleteTodo}
          />
        ))}
      </ul>
    </>
  );
}
