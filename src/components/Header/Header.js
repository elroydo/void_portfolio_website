import Link from 'next/link';
import React from 'react';
import { AiFillCompass, AiFillRobot, AiFillHourglass } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => (
  <Container> 
    <Div1>
      <Link href='/'>
        <a style={{ color: 'white', display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          <DiCssdeck size='3rem' /> <Span>Port</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#potentials'> 
          <NavLink>potentials</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#technologies'> 
          <NavLink>technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'> 
          <NavLink>about</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://poets.org/poem/raven'>
        <AiFillCompass size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://poets.org/poem/raven'>
        <AiFillRobot size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://poets.org/poem/raven'>
        <AiFillHourglass size='3rem' />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;