import React from 'react';
import Project from '../../../components/Projects/Project';
import Layout from '../../../layout/Layout';
import projects from '../../../data/projects';

function ProjectProfilePage(props) {
  const { id } = props;
  const project = projects.filter(p => p.id === id)[0];

  return (
    <Layout>
      <Project project={project} />
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  const id = parseInt(ctx.query.id, 10);
  const project = projects.filter(p => p.id === id)[0];
  const seo = {
    title: `${project.name} - Keitel Jovin`,
    desc: project.description,
  };
  return { props: { id, seo } };
}

export default ProjectProfilePage;
