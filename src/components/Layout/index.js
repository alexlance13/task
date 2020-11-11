import React from 'react';
import NavBar from '../../components/NavBar';
import { Wrapper, Content } from './styles';

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <NavBar />
      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Layout;
