import React from 'react';
import { BiCylinder, BiCuboid } from 'react-icons/bi';
import { SiPrisma } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <div>
    <Section id='technologies'>
      <SectionDivider />
      <br/>
      <SectionTitle>technologies</SectionTitle>
      <SectionText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </SectionText>
      <List>
        <ListItem>
          <BiCylinder size='3rem' />
          <ListContainer>
            <ListTitle>cylider</ListTitle>
            <ListParagraph>
              stacked with<br/>
              messier
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <BiCuboid size='3rem' />
          <ListContainer>
            <ListTitle>cuboid</ListTitle>
            <ListParagraph>
              stacked with<br/>
              fornax
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <SiPrisma size='3rem' />
          <ListContainer>
            <ListTitle>prism</ListTitle>
            <ListParagraph>
              stacked with<br/>
              cygnus
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  </div>
);

export default Technologies;
