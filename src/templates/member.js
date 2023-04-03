/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-danger */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { motion } from 'framer-motion';
import Img from 'gatsby-image';
import ReactMarkdown from 'react-markdown';
import { Section, Container, TopPadding } from '../components/utility';
import SEO from '../components/Seo';
import Facebook from '../components/svg/Facebook';
import Instagram from '../components/svg/Instagram';
import LinkedIn from '../components/svg/LinkedIn';
import Twitter from '../components/svg/Twitter';
import Card from '../components/_txt/TeamMemberCard';
import MarkdownStyles from '../components/MarkdownStyles';

const pageTransition = {
  initial: {},
  enter: {},
  exit: {},
};

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

const Article = styled(motion.article).attrs({ className: 'bg-gray-200' })``;

const GridLayout = styled.div`
  #grid-body {
    grid-area: body;
    position: relative;
    max-width: 800px;
  }
  #grid-aside {
    grid-area: aside;
    display: grid;
    grid-row-gap: 2rem;
    padding: 2rem 0 2rem;
  }
  display: grid;
  position: relative;
  grid-template-areas:
    'body'
    'aside';

  @media (min-width: 1000px) {
    grid-template-columns: 400px 1fr;
    grid-template-areas: 'aside body';
  }
`;

const ContentWrapper = styled(motion.div)`
  position: sticky;
  top: 92px;
`;

const SPAN = styled.span`
  :not(:last-child) {
    ::after {
      content: ' | ';
    }
  }
`;

const ImageWrapper = styled(motion.div)`
  height: 320px;
  max-width: 800px;
  margin-bottom: 16px;
  overflow: hidden;
`;

const ImageSharp = styled(Img)`
  width: 100%;
  height: 100%;
`;

const Heading = styled(motion.div).attrs({ className: 'bg-blue-900' })`
  margin: ${props => (props.featureImage !== null ? '-4rem 0 0 2rem' : '2rem 0 0 2rem')};
  padding: 1rem 3rem;
  display: inline-block;
  color: #fff;
  position: relative;
  border-bottom: 0.5rem #3182ce solid;
  h1 {
    font-size: 1.5rem;
    margin: 0;
  }
  p {
    font-size: 1rem;
    margin: 0;
  }
`;

const SocialIconWrapper = styled.div`
  display: inline-block;
  margin: 1rem 0 0;
  svg {
    height: 20px;
    fill: #ffffff;
    margin: 0 0.25rem 0;
  }
  a {
    display: inline-block;
  }
`;

const BodyWrapper = styled(motion.div)`
  padding: 2rem 1rem 4rem;
`;

const ListLayout = styled.div`
  display: grid;
  grid-gap: 2rem;
  margin: 0 auto;
  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
    max-width: 600px;
  }
  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 900px;
  }
  @media (min-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

const member = ({
  data: {
    selected: { edges: teamMember },
  },
  data: {
    team: { edges: nonSelected },
  },
  location: { pathname },
}) => {
  //
  const { name, title, bio, facebook, twitter, instagram, linkedIn, featureImage, profileImage } = teamMember[0].node;

  const pageSlug = pathname.split('/').pop();

  return (
    <>
      <Article key={pathname} initial="initial" animate="enter" exit="exit" variants={pageTransition}>
        <SEO title={`TXT Team Member ${name}`} description={`TXT Team Member ${name}`} />
        <TopPadding />
        <Section>
          <Container>
            <GridLayout>
              <div id="grid-aside" style={{ display: 'grid' }}>
                <ListLayout>
                  {teamMember.map(person => {
                    return (
                      <div key={person.node.id}>
                        <Card data={person} current={pageSlug} />
                      </div>
                    );
                  })}
                  {nonSelected.map(person => {
                    return (
                      <div key={person.node.id}>
                        <Card data={person} />
                      </div>
                    );
                  })}
                </ListLayout>
              </div>
              <div id="grid-body">
                <ContentWrapper variants={container} initial="initial" animate="enter">
                  {featureImage !== null ? (
                    <ImageWrapper variants={item}>
                      <ImageSharp fluid={featureImage.asset.fluid} />
                    </ImageWrapper>
                  ) : (
                    ''
                  )}
                  <Heading featureImage={featureImage} variants={item}>
                    <h1>{name}</h1>
                    <p>
                      {title.map((position, index) => {
                        return <SPAN key={index}>{position}</SPAN>;
                      })}
                    </p>
                    <SocialIconWrapper>
                      {facebook && (
                        <a href={facebook} target="_blank" rel="noopener noreferrer">
                          <Facebook />
                        </a>
                      )}
                      {instagram && (
                        <a href={instagram} target="_blank" rel="noopener noreferrer">
                          <Instagram />
                        </a>
                      )}
                      {linkedIn && (
                        <a href={linkedIn} target="_blank" rel="noopener noreferrer">
                          <LinkedIn />
                        </a>
                      )}
                      {twitter && (
                        <a href={twitter} target="_blank" rel="noopener noreferrer">
                          <Twitter />
                        </a>
                      )}
                    </SocialIconWrapper>
                  </Heading>
                  <BodyWrapper variants={item}>
                    <MarkdownStyles>
                      <ReactMarkdown source={bio} />
                    </MarkdownStyles>
                  </BodyWrapper>
                  <hr />
                </ContentWrapper>
              </div>
            </GridLayout>
          </Container>
        </Section>
      </Article>
    </>
  );
};

export default member;

member.propTypes = {
  data: PropTypes.shape().isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export const postQuery = graphql`
  query($slug: String!) {
    selected: allSanityTeam(filter: { slug: { current: { eq: $slug } } }) {
      edges {
        node {
          twitter
          title
          bio
          facebook
          featureImage {
            asset {
              fluid(maxWidth: 800) {
                ...GatsbySanityImageFluid_noBase64
              }
            }
          }
          instagram
          id
          linkedIn
          name
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
    team: allSanityTeam(filter: { slug: { current: { ne: $slug } } }, sort: { fields: order }) {
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
