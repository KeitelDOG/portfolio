import React from 'react';
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiOutlineWhatsApp,
} from 'react-icons/ai';
import { Link } from '../../styles/GlobalComponents';
import { SocialIcons } from '../Header/HeaderStyles';
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles';

function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Chat or Contact</LinkTitle>
          <LinkItem href="https://api.whatsapp.com/send?phone=50937567873">Whatsapp</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:keiteldog@gmail.com">
            keiteldog@gmail.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Phone (Haiti )</LinkTitle>
          <LinkItem href="tel:+50937567873">
            🇭🇹 +50937567873
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            <Link href="/">Keitel Jovin</Link>
            {' '}
            Portfolio {year}
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://www.facebook.com/keiteldog" target="_blank">
            <AiFillFacebook size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://api.whatsapp.com/send?phone=50937567873" target="_blank">
            <AiOutlineWhatsApp size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.twitter.com/keiteldog" target="_blank">
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>

    </FooterWrapper>
  );
}

export default Footer;
