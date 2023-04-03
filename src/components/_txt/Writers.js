import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { Section, Container, Block, Heading } from '../utility';
import Card from './WriterCard';

const QUERY = graphql`
  query MyQuery {
    writers: allGhostAuthor {
      edges {
        node {
          facebook
          id
          name
          postCount
          profile_image
          localProfileImage {
            childImageSharp {
              fluid(maxWidth: 112) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          slug
          twitter
          website
        }
      }
    }
    team: allSanityTeam {
      edges {
        node {
          slug {
            current
          }
        }
      }
    }
  }
`;

const Wrapper = styled.div.attrs({ className: 'bg-gray-400' })``;

const GridLayout = styled.div`
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

const Writers = () => {
  //
  const {
    writers: { edges: authors },
    team: { edges: members },
  } = useStaticQuery(QUERY);

  return (
    <Wrapper>
      <Section>
        <Container>
          <Block>
            <Heading xs="center" sm="center" md="center" lg="center" xl="center">
              <h1>Meet the Writers</h1>
              <p>TXT Staff Writers and Contributors</p>
            </Heading>
            <GridLayout>
              {authors.map(writer => {
                return (
                  <div key={writer.node.id}>
                    <Card data={writer} />
                  </div>
                );
              })}
            </GridLayout>
          </Block>
        </Container>
      </Section>
    </Wrapper>
  );
};

export default Writers;
