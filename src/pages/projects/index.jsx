import React from 'react';
import Projects from '../../components/Projects/Projects';
import Layout from '../../layout/Layout';
import projects from '../../data/projects';

function ProjectsPage() {
  return (
    <Layout>
      <Projects projects={projects} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const seo = {
    title: 'My Projects - Keitel Jovin',
    imageUrl: projects[1].thumbnail,
  };
  return { props: { seo } };
}

export default ProjectsPage;
