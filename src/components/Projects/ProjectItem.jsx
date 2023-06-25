import React from 'react';
import Link from 'next/link';

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  Specs,
  UtilityList,
  UtilityListItem,
  Img,
} from './ProjectsStyles';

function ProjectItem(props) {
  const { project } = props;
  const specs = `${project.year} - ${project.side} [${project.type}]`;

  return (
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
          {project.link !== 'private' && (
            <ExternalLinks href={project.link} target="_blank">Live Preview</ExternalLinks>
          )}
        </UtilityListItem>

        <UtilityListItem>
          {project.source !== 'private' && (
            <ExternalLinks href={project.source} target="_blank">Source Code</ExternalLinks>
          )}
        </UtilityListItem>
      </UtilityList>
    </BlogCard>
  );
}

export default ProjectItem;
