import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Todos from './pages/Todos';
import AuthApi from './api/auth';
import TodoApi from './api/todos';

const authApi = new AuthApi();
const todosApi = new TodoApi();
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/signin',
    element: <Signin authApi={authApi} />,
  },
  {
    path: '/signup',
    element: <Signup authApi={authApi} />,
  },
  {
    path: '/todo',
    element: <Todos todosApi={todosApi} />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
