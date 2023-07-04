import React from 'react';
import Link from 'next/link';

import {
  GridContainer,
  GridItem,
} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import {
  Container, Div1, Div2, Div3, NavLink, SocialIcons,
} from '../Header/HeaderStyles';

import ProjectItem from './ProjectItem';
import prjs from '../../data/projects';

function Projects(props) {
  const { projects } = props;
  return (
    <Section id="projects">
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      {projects.length < prjs.length && (
        <Link href="/projects" as="/projects">
          <NavLink>See all Projects ({prjs.length})</NavLink>
        </Link>
      )}
      <GridContainer>
        {projects.map(project => (
          <GridItem key={project.id}>
            <ProjectItem project={project} />
          </GridItem>
        ))}
      </GridContainer>
    </Section>
  );
}

export default Projects;
