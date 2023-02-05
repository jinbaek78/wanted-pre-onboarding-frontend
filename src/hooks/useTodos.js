import React, { useEffect, useState } from 'react';

export default function useTodos(todosApi, data) {
  const [todos, setTodos] = useState(null);
  const addTodo = async (text) =>
    todosApi.addTodo({ todo: text }).then(getTodos);

  const getTodos = async () => todosApi.getTodos().then(setTodos);

  useEffect(() => {
    getTodos();
  }, []);
  return [todos, addTodo];
}
