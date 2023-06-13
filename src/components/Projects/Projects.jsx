import React from 'react';
import Link from 'next/link';

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  GridItem,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  Specs,
  UtilityList,
  UtilityListItem,
  Img,
  NoLink,
} from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

function Projects(props) {
  const { projects } = props;
  return (
    <Section id="projects">
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects.map(project => {
          const specs = `${project.year} - ${project.side} [${project.type}]`;

          return (
            <GridItem key={project.id}>
              <BlogCard>
                <Link href={`/projects/${project.id}`} as={`/projects/${project.id}`}>
                  <Img src={project.thumbnail} />
                  <HeaderThree title={project.name}>{project.name}</HeaderThree>
                </Link>

                <Hr />

                <Specs>{specs}</Specs>
                <CardInfo className="card-info">{project.description}</CardInfo>
                <div>
                  <TagList>
                    {project.stack.map(skill => (
                      <Link key={skill.id} href={`/skills/${skill.id}`} as={`/skills/${skill.id}`}>
                        <Tag>{skill.name}</Tag>
                      </Link>
                    ))}
                  </TagList>
                </div>
                <UtilityList>
                  <UtilityListItem>
                    {project.link ? (
                      <ExternalLinks href={project.link} target="_blank">Live Preview</ExternalLinks>
                    ) : (
                      <NoLink>No Live</NoLink>
                    )}
                  </UtilityListItem>

                  <UtilityListItem>

                    {project.source === 'private' ? (
                      <NoLink>private code</NoLink>
                    ) : (
                      <ExternalLinks href={project.source} target="_blank">Source Code</ExternalLinks>
                    )}
                  </UtilityListItem>

                </UtilityList>
              </BlogCard>
            </GridItem>
          );
        })}
      </GridContainer>
    </Section>
  );
}

export default Projects;