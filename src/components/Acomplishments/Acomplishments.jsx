import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import {
  Box, Boxes, BoxNum, BoxText,
} from './AcomplishmentsStyles';

import accomplishments from '../../data/accomplishments';

function Acomplishments() {
  return (
    <Section>
      <SectionTitle>Personal Accomplishments</SectionTitle>
      <Boxes>
        {accomplishments.map((accomp, index) => (
          <Box key={`accomplishment-${index}`}>
            <BoxNum>{accomp.number.toLocaleString('en')}</BoxNum>
            <BoxText>{accomp.text}</BoxText>
          </Box>
        ))}
      </Boxes>
      <SectionDivider />
    </Section>
  );
}

export default Acomplishments;
