import React from 'react';
import { AiFillCompass, AiFillRobot, AiFillHourglass } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>call</LinkTitle>
          <LinkItem href='tel:000-1111-2222'>000-1111-2222</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>email</LinkTitle>
          <LinkItem href='mailto:contact@void.com'>contact@void.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>dream a dream.</Slogan>
        </CompanyContainer>
        <SocialIcons href='https://poets.org/poem/raven'>
          <AiFillCompass size='3rem' />
        </SocialIcons>
        <SocialIcons href='https://poets.org/poem/raven'>
          <AiFillRobot size='3rem' />
        </SocialIcons>
        <SocialIcons href='https://poets.org/poem/raven'>
          <AiFillHourglass size='3rem' />
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
