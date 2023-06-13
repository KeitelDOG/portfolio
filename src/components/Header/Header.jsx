import Link from 'next/link';
import React from 'react';
import {
  AiFillGithub, AiFillLinkedin,
} from 'react-icons/ai';
import { DiStackoverflow } from 'react-icons/di';
import {
  Container, Div1, Div2, Div3, NavLink, SocialIcons,
} from './HeaderStyles';

function Header() {
  return (
    <Container>
      <Div1>
        <Link
          href="/"
          as="/"
          style={{ display: 'flex', alignItems: 'center', color: 'white' }}
        >
          <div style={{
            padding: 3, height: 46, width: 46, backgroundColor: '#fff', boder: '1px solid #ccc', borderRadius: 23,
          }}
          >
            <img src="/dog-totem.svg" height={40} width={40} alt="logo dog" />
          </div>
          <span style={{ marginLeft: 10, marginTop: 7, fontSize: 20 }}>KeitelDOG</span>

        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="/projects" as="/projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="/skills" as="/skills">
            <NavLink>Skills</NavLink>
          </Link>
        </li>
        <li>
          <Link href="/about" as="/about">
            <NavLink>About</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://stackoverflow.com/users/5565544/keiteldog" target="_blank">
          <DiStackoverflow size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://github.com/KeitelDOG" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/keiteldog/" target="_blank">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  );
}

export default Header;
