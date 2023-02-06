import { useCallback, useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function useTodos(todosApi) {
  const [todos, setTodos] = useState(null);
  const { token } = useAuth();
  const getTodos = useCallback(
    async () => todosApi.getTodoList().then(setTodos),
    [todosApi]
  );
  const addTodo = useCallback(
    async (text) => todosApi.addTodo(text).then(getTodos),
    [todosApi, getTodos]
  );
  const updateTodo = useCallback(
    async (data) => todosApi.updateTodo(data).then(getTodos),
    [todosApi, getTodos]
  );
  const deleteTodo = useCallback(
    async (id) => todosApi.deleteTodo(id).then(getTodos),
    [todosApi, getTodos]
  );
  useEffect(() => {
    if (token) {
      getTodos();
    }
  }, [getTodos]);
  return [todos, addTodo, updateTodo, deleteTodo];
}
