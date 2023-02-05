import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Todo() {
  const { token } = useAuth();
  const { state } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (!token && !state) {
      navigate('/signin');
    }
  }, [state, token, navigate]);
  return <div>Todo</div>;
}
