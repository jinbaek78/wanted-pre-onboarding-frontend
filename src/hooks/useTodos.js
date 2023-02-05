import React, { useEffect, useState } from 'react';

export default function useTodos(todosApi) {
  const [todos, setTodos] = useState(null);
  const addTodo = async (text) => todosApi.addTodo(text).then(getTodos);
  const getTodos = async () => todosApi.getTodoList().then(setTodos);
  const updateTodo = async (data) => todosApi.updateTodo(data).then(getTodos);
  useEffect(() => {
    getTodos();
  }, []);
  return [todos, addTodo, updateTodo];
}
