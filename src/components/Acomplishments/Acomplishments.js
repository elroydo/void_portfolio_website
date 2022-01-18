import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 22, text: 'open'},
  { number: 33, text: 'dent', },
  { number: 44, text: 'lower', },
  { number: 55, text: 'star', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>fusion</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}~</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
