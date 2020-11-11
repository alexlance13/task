import React from 'react';
import { NavLink } from 'react-router-dom';
import { Wrapper } from './styles';

const NavBar = () => {
  return (
    <Wrapper>
      <NavLink to='/'>Gallery</NavLink>
      <ul>
        <li key='back'>
          <NavLink to='/'>Back to albums</NavLink>
        </li>
      </ul>
    </Wrapper>
  );
};

export default NavBar;
