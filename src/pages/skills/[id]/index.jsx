import React from 'react';
import Technology from '../../../components/Technologies/Technology';
import Layout from '../../../layout/Layout';
import skills from '../../../data/skills';

function SkillProfilePage(props) {
  const { id } = props;
  const skill = skills.filter(s => s.id === id)[0];

  return (
    <Layout>
      <Technology skill={skill} />
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  const id = parseInt(ctx.query.id, 10);
  const skill = skills.filter(s => s.id === id)[0];
  const seo = {
    title: `${skill.name} - Keitel Jovin`,
    desc: `${skill.name} is one of the skills I used in my projects.`,
  };
  return { props: { id, seo } };
}

export default SkillProfilePage;
