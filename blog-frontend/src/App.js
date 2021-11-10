import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from 'pages/LoginPage';
import PostListPage from 'pages/PostListPage';
import RegisterPage from 'pages/RegisterPage';
import PostPage from 'pages/PostPage';
import WritePage from 'pages/WritePage';

const App = () => {
  return (
    <Routes>
      <Route element={<PostListPage />} path="/" />
      <Route element={<LoginPage />} path="login" />
      <Route element={<RegisterPage />} path="register" />
      <Route element={<WritePage />} path="write" />
      <Route path="@:username" element={<PostListPage />} />
      <Route path="@:username/:postId" element={<PostPage />} />
    </Routes>
  );
};

export default App;
