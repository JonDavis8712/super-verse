import React from 'react';
import { Routes, Route } from'react-router-dom';
import Login from '../pages/Login';

const LoginRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  )
}

export default LoginRoute;
