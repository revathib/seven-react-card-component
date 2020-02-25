import React from 'react';
import styled from 'styled-components';
import logo from '../../../src/assets/img/logo.png';

const Wrapper = styled.div`
  display: flex;
  padding: 1rem 0 0.65625rem;
`;

const Profile = styled.div`
  flex: 1 0 0;
  margin: 0 0.3rem;
`;

const Image = styled.img`
  border-radius: 0.35rem;
  display: block;
  width: 40%;
`;

const User = styled.div`
  flex: 9 0 0;
  margin: 0 0.3rem;
`;

const Header = () => (
  <Wrapper>
    <Profile>
      <a target="_blank" rel="noopener noreferrer" href="https://sevengroup.com.au/">
        <Image src={logo} alt="Seven" />
      </a>
    </Profile>
    <User>{/* User details */}</User>
  </Wrapper>
);

export default Header;
