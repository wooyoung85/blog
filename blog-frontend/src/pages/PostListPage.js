import React from 'react';
import { Outlet } from 'react-router';

const PostListPage = () => {
  return (
    <>
      <div>포스트리스트</div>
      <Outlet />
    </>
  );
};

export default PostListPage;
