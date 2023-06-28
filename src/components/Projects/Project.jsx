import React from 'react';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import { Page } from '../../styles/GlobalComponents';
import {
  ProjectPageContainer,
  CarouselSection,
  CardInfo,
  ExternalLinks,
  HeaderThree,
  Hr,
  Specs,
  FeatureSection,
  FeatureList,
  Feature,
  Tag,
  TagList,
  UtilityList,
  UtilityListItem,
} from './ProjectsStyles';

function Project(props) {
  const { project } = props;
  const specs = `${project.year} - ${project.side} [${project.type}]`;

  return (
    <Page>
      <ProjectPageContainer>
        <HeaderThree title={project.name}>{project.name}</HeaderThree>
        <Hr />

        <CarouselSection>
          <Carousel dynamicHeight>
            {project.images.map(image => {
              // /images/projects/6/givepower-spectra.png
              const filename = image.split('/').slice(-1)[0];
              const imgDesc = filename.split('.')[0].split('-').join(' ');
              return (
                <div key={image}>
                  <img src={image} alt={project.name} />
                  <p className="legend">{imgDesc}</p>
                </div>
              );
            })}
          </Carousel>
        </CarouselSection>

        <Specs>{specs}</Specs>
        <CardInfo className="card-info">{project.description}</CardInfo>

        <FeatureSection>
          <FeatureList>
            {project.features.map((feature, ind) => (
              <Feature key={`feature-${ind}`}>
                {feature}
              </Feature>
            ))}
          </FeatureList>
        </FeatureSection>

        <div>
          <TagList>
            {project.skills.map(skill => (
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
      </ProjectPageContainer>
    </Page>
  );
}

export default Project;
