import React from 'react';
import styled from 'styled-components';

const ResponsiveBlock = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  width: 1200px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 780px;
  }
  @media (max-width: 780px) {
    width: 100%;
  }
`;

const Responsive = ({ children, ...rest }) => {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
