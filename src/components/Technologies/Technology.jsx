import React from 'react';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import {
  Section,
} from '../../styles/GlobalComponents';
import {
  ListContainer, ListItem, ListTitle, ListParagraph,
} from './TechnologiesStyles';

import Projects from '../Projects/Projects';
import projects from '../../data/projects';

function Technology(props) {
  const { skill = [] } = props;

  const Icon = skill.icon || AiOutlineMinusCircle;
  const skillProjects = projects.filter(pj => pj.skillIds.includes(skill.id));

  return (
    <Section id="skills">
      <ListItem key={skill.id}>
        <picture>
          <Icon size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>{skill.name}</ListTitle>
          <ListParagraph>
            This skill is used one or more projects. Some projects might not be listed yet. For now, the total of added projects that use this skill is:
            {' '}
            {skillProjects.length}
            {' '}
            project(s)
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <Projects projects={skillProjects} />
    </Section>
  );
}

export default Technology;
