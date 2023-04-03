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
import Twitter from '../components/svg/Twitter';
import Card from '../components/_txt/WriterCard';
import MarkdownStyles from '../components/MarkdownStyles';

const pageTransition = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
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

const ContentWrapper = styled.div`
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

const ImageWrapper = styled.div`
  height: 320px;
  max-width: 800px;
  margin-bottom: 16px;
  overflow: hidden;
`;

const ImageSharp = styled(Img)`
  width: 100%;
  height: 100%;
`;

const Heading = styled.div.attrs({ className: 'bg-blue-900' })`
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

const BodyWrapper = styled.div`
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

const Writer = ({
  data: {
    selected: { edges: writer },
  },
  data: {
    notSelected: { edges: writers },
  },
  location,
}) => {
  //
  const {
    bio,
    name,
    facebook,
    id,
    postCount,
    profile_image: profileImage,
    slug,
    twitter,
    website,
    cover_image: featureImage,
  } = writer[0].node;

  const pageSlug = location.pathname.split('/').pop();

  return (
    <>
      <Article key={location.pathname} initial="initial" animate="enter" exit="exit" variants={pageTransition}>
        <SEO title={`TXT Writer: ${name}`} description={`TXT Writer: ${name}`} />
        <TopPadding />
        <Section>
          <Container>
            <GridLayout>
              <div id="grid-aside" style={{ display: 'grid' }}>
                <ListLayout>
                  {writer.map(person => {
                    return <Card key={person.node.id} data={person} current={pageSlug} />;
                  })}
                  {writers.map(person => {
                    return <Card key={person.node.id} data={person} />;
                  })}
                </ListLayout>
              </div>
              <div id="grid-body">
                <ContentWrapper>
                  {/* {featureImage !== null ? (
              <ImageWrapper>
                <ImageSharp fluid={featureImage.asset.fluid} />
              </ImageWrapper>
            ) : (
              ''
            )} */}
                  <Heading featureImage={featureImage}>
                    <h1>{name}</h1>
                    <SocialIconWrapper>
                      {facebook && (
                        <a href={facebook} target="_blank" rel="noopener noreferrer">
                          <Facebook />
                        </a>
                      )}
                      {twitter && (
                        <a href={twitter} target="_blank" rel="noopener noreferrer">
                          <Twitter />
                        </a>
                      )}
                    </SocialIconWrapper>
                  </Heading>
                  <BodyWrapper>
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

export default Writer;

Writer.propTypes = {
  data: PropTypes.shape().isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export const postQuery = graphql`
  query($slug: String!) {
    selected: allGhostAuthor(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          localProfileImage {
            childImageSharp {
              fluid(maxWidth: 112) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          bio
          name
          facebook
          id
          postCount
          profile_image
          slug
          twitter
          website
          cover_image
        }
      }
    }
    notSelected: allGhostAuthor(filter: { slug: { ne: $slug } }) {
      edges {
        node {
          localProfileImage {
            childImageSharp {
              fluid(maxWidth: 112) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          bio
          name
          facebook
          id
          postCount
          profile_image
          slug
          twitter
          website
          cover_image
        }
      }
    }
  }
`;
