import React from 'react';

import {
  Section, SectionText, SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, UserAvatar } from './HeroStyles';

function Hero() {
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey there,
        </SectionTitle>
        <SectionText>
          <UserAvatar src="/images/keitel-jovin.jpg" />
          I am Keitel Robes Pierre <b>Jovin</b>, an experienced Software Engineer, mainly in Web technologies, with a good attention to detail. Strong skills for Problem solving, my main skills for development are Javascript, React, React-Native, Node, jQuery, PHP, Laravel, Java and Android. Licensed in Software Development, completed CodePath Android Bootcamp and Hack Reactor at Galvanize, participated in Hackaton, and now I'm seeking for software engineering opportunities.
          When I'm not coding, I'm listening to music, playing football in real life and video games, jogging and reading tech stuffs.
        </SectionText>
        <Button onClick={(e) => {
          e.preventDefault();
          window.location.href = '/files/keitel-resume.pdf';
        }}
        >
          My Resume
        </Button>
      </LeftSection>
    </Section>
  );
}

export default Hero;
