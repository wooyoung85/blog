import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from 'pages/LoginPage';

const App = () => {
  console.log(222);
  return (
    <Routes>
      <Route component={LoginPage} path="/login" />
    </Routes>
  );
};

export default App;
