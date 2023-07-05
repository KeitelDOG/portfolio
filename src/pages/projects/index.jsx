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

export async function getServerSideProps(ctx) {
  const seo = {
    title: 'My Projects - Keitel Jovin',
    imageUrl: projects[1].thumbnail,
    host: ctx.req.headers.host,
  };
  return { props: { seo } };
}

export default ProjectsPage;
