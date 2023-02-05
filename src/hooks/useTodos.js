import { useCallback, useEffect, useState } from 'react';

export default function useTodos(todosApi) {
  const [todos, setTodos] = useState(null);
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
    getTodos();
  }, [getTodos]);
  return [todos, addTodo, updateTodo, deleteTodo];
}
