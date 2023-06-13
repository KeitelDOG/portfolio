import React from 'react';
import Link from 'next/link';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import {
  Section, SectionDivider, SectionText, SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  ProjectSection,
  ProjectList,
  ProjectItem,
} from './TechnologiesStyles';

import projects from '../../data/projects';

function Technologies(props) {
  const { skills = [] } = props;

  return (
    <Section id="skills">
      <SectionDivider divider />
      <SectionTitle>Skills</SectionTitle>
      <SectionText>
        I worked with many technologies, with a lot of experiences in some of them. For now, I mainly work with Javascript stack like React, NextJS, React Native, Node and Express, and MySql as Database. But I am open to work with others and learn any new Tech.
      </SectionText>
      <List>
        {skills.map((skill) => {
          const Icon = skill.icon || AiOutlineMinusCircle;
          const skillProjects = projects.filter(pj => pj.skillIds.includes(skill.id));

          let others = '';
          const twoProjects = skillProjects.slice(0, 2);
          if (skillProjects.length > 2) {
            const count = skillProjects.length - 2;
            others = ` and ${count} more.`;
          }

          return (
            <ListItem key={skill.name}>
              <picture>
                <Icon size="3rem" />
              </picture>
              <ListContainer>
                <Link href={`/skills/${skill.id}`} as={`/skills/${skill.id}`}>
                  <ListTitle>{skill.name}</ListTitle>
                </Link>
                <ListParagraph>
                  {twoProjects.length ? (
                    <ProjectSection>
                      <ProjectList>
                        {twoProjects.map(p => (
                          <ProjectItem key={p.id}>
                            {p.name}
                          </ProjectItem>
                        ))}
                        {others && (
                        <ProjectItem>
                          {others}
                        </ProjectItem>
                        ) }
                      </ProjectList>
                    </ProjectSection>
                  ) : (
                    '[No project added yet]'
                  )}
                </ListParagraph>
              </ListContainer>
            </ListItem>
          );
        })}
      </List>
      <SectionDivider colorAlt />
    </Section>
  );
}

export default Technologies;
