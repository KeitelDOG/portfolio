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

export async function getServerSideProps() {
  const seo = {
    title: 'My Skills - Keitel Jovin',
  };
  return { props: { seo } };
}

export default SkillsPage;
