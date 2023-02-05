import React, { useEffect, useState } from 'react';

export default function useTodos(todosApi) {
  const [todos, setTodos] = useState(null);
  useEffect(() => {
    todosApi.getTodos().then((data) => setTodos(data));
  }, []);
  return todos;
}
