import React from 'react';
import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Timeline from '../components/TimeLine/TimeLine';
import Layout from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

function About() {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Timeline />
      <Acomplishments />
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  const seo = {
    title: 'About Me - Keitel Jovin',
    desc: 'This is an introduction of myself, a timeline of what I accomplished by year and personal achievements globally.',
    host: ctx.req.headers.host,
  };
  return { props: { seo } };
}

export default About;
