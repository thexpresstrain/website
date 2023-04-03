import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { motion } from 'framer-motion';
import { Section, Container, Block, Heading } from '../utility';
import Card from './PricingCard';

const QUERY = graphql`
  query {
    hub: allSanityHub {
      edges {
        node {
          type
          price
          id
          features
          description
          image {
            asset {
              fluid(maxWidth: 400) {
                ...GatsbySanityImageFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
    contact: site {
      siteMetadata {
        contact {
          telephone
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

const GridLayout = styled(motion.div)`
  position: relative;
  display: grid;
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
  @media (min-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Wrapper = styled.div.attrs({})``;

const Pricing = () => {
  //
  const {
    hub: { edges: types },
    contact: {
      siteMetadata: {
        contact: { telephone },
      },
    },
  } = useStaticQuery(QUERY);

  return (
    <Wrapper>
      <Section>
        <Container>
          <Block>
            <Heading xs="center" sm="center" md="center" lg="center" xl="center">
              <span>Desks and Suites</span>
              <h1>TXT Hub</h1>
              <p>Get your best work done in our fully equiped hub</p>
            </Heading>
            <GridLayout variants={container} initial="initial" animate="enter">
              {types.map(type => {
                return (
                  <motion.div key={type.node.id} variants={item}>
                    <Card data={type} phone={telephone} />
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

export default Pricing;
