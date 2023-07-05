import React from 'react';
import Technologies from '../../components/Technologies/Technologies';
import Layout from '../../layout/Layout';
import skills from '../../data/skills';

function SkillsPage() {
  return (
    <Layout>
      <Technologies skills={skills} />
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  const seo = {
    title: 'My Skills with their Projects - Keitel Jovin',
    imageUrl: '/images/skills-code.jpg',
    host: ctx.req.headers.host,
  };
  return { props: { seo } };
}

export default SkillsPage;
