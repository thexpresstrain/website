import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useStaticQuery, graphql } from 'gatsby';
import { Section, Container, Block, Heading } from '../utility';
import Card from './TeamMemberCard';

const QUERY = graphql`
  query {
    team: allSanityTeam(sort: { fields: order }) {
      edges {
        node {
          facebook
          id
          instagram
          linkedIn
          name
          title
          twitter
          profileImage {
            asset {
              fluid(maxWidth: 112) {
                ...GatsbySanityImageFluid_noBase64
              }
            }
          }
          slug {
            current
          }
        }
      }
    }
  }
`;

const container = {
  enter: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
  exit: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

const item = {
  initial: { x: 32, opacity: 0 },
  enter: {
    x: 0,
    opacity: 1,
  },
};

const Wrapper = styled.div.attrs({ className: 'bg-gray-200' })``;

const GridLayout = styled(motion.div)`
  margin: 2rem auto 2rem;
  display: grid;
  grid-row-gap: 2rem;
  grid-column-gap: 1rem;
  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
    max-width: 620px;
  }
  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 940px;
  }
`;

const Team = () => {
  //
  const {
    team: { edges: members },
  } = useStaticQuery(QUERY);

  return (
    <Wrapper>
      <Section>
        <Container>
          <Block>
            <Heading xs="center" sm="center" md="center" lg="center" xl="center">
              <span>The Xpress Train</span>
              <h1>Meet the Team</h1>
            </Heading>
            <GridLayout variants={container} initial="initial" animate="enter">
              {members.map(member => {
                return (
                  <motion.div key={member.node.id} variants={item}>
                    <Card data={member} />
                  </motion.div>
                );
              })}
            </GridLayout>
          </Block>
        </Container>
      </Section>
    </Wrapper>
  );
};

export default Team;
