import React from 'react';

import {
  GridContainer,
  GridItem,
} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import ProjectItem from './ProjectItem';
import prjs from '../../data/projects';

function Projects(props) {
  const { projects } = props;
  return (
    <Section id="projects">
      <SectionDivider />
      <SectionTitle main>Projects (added: {prjs.length})</SectionTitle>
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
