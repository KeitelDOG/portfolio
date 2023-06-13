import React from 'react';
import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import Layout from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import projectsData from '../data/projects';
import skillsData from '../data/skills';

const projects = projectsData.slice(0, 4);

const skillIds = skillsData.reduce((acc, skill) => {
  acc[skill.id] = skill;
  return acc;
}, {});

const ids = [6, 7, 8, 1, 9, 11, 14, 4, 12, 13, 2, 201];
let skills = [];

// fill skills
for (let i = 0; i < ids.length; i++) {
  skills = ids.map(id => skillIds[id]);
}

function Home() {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects projects={projects} />
      <Technologies skills={skills} />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
}

export default Home;
