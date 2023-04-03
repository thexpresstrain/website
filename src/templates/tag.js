import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Card from '../components/PostCard';
import Pagination from '../components/Pagination';
import SEO from '../components/Seo';
import { Section, Container, Block } from '../components/utility';
import MiniCard from '../components/MiniPostCard';

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
  initial: { x: 16, opacity: 0 },
  enter: {
    x: 0,
    opacity: 1,
  },
};

const Article = styled(motion.article)`
  h1 {
    text-align: center;
    color: #000000;
    font-weight: 600;
    font-size: 1rem;
    margin: 1rem 0;
    span {
      color: #2c7a7b;
    }
  }
  hr {
    border: 1px #2c7a7b solid;
    opacity: 0.2;
  }
`;

const GridMainLayout = styled.div.attrs({})`
  #grid-main {
    grid-area: main;
  }
  #grid-aside {
    grid-area: aside;
    max-width: 400px;
    margin: 0 auto;
    @media (min-width: 1280px) {
      margin: 0;
    }
  }
  position: relative;
  display: grid;
  margin: 0 auto;
  padding: 2rem 0 0;
  grid-template-columns: 1fr;
  grid-template-areas:
    'main'
    'aside';
  @media (min-width: 1280px) {
    grid-template-columns: 760px auto;
    grid-template-areas: 'main aside';
    grid-column-gap: 4rem;
  }
`;

const AsideContainer = styled.div.attrs({})`
  position: sticky;
  top: 120px;
  h2 {
    color: #013a51;
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.333333333333333;
    text-align: left;
    margin: 0 0 1rem 0;
  }
`;

const CardGridLayout = styled(motion.div)`
  display: grid;
  margin: 2rem auto;
  grid-row-gap: 1rem;
  max-width: 360px;
  @media (min-width: 760px) {
    grid-column-gap: 2rem;
    max-width: 760px;
    grid-template-columns: 1fr 1fr;
  }
`;

const TagContainer = styled.div`
  padding: 0 0 2rem;
`;

const Tags = styled.span`
  display: block;
  margin-bottom: 0.5rem;
  a {
    background: ${props => (props.current === props.page ? '#68d391' : '#2a4365')};
    color: ${props => (props.current === props.page ? '#000000' : '#ffffff')};
    padding: 0.25rem 1rem;
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1.714285714285714;
    border-radius: 4px;
  }
  strong {
    margin: 0 0 0 0.5rem;
    font-size: 0.875rem;
    font-weight: 400;
  }
`;

const Tag = ({ data, pageContext, location: { pathname } }) => {
  //
  const tag = data.ghostTag;
  const posts = data.allGhostPost.edges;

  const {
    tagCollection: { edges: tags },
  } = data;

  const {
    recentPosts: { edges: recent },
  } = data;

  const {
    allPosts: { totalCount },
  } = data;

  return (
    <>
      <Article key={pathname} initial="initial" animate="enter" exit="exit" variants={pageTransition}>
        <SEO title={`All posts tagged with ${tag.name}`} description={`All posts tagged with ${tag.name}`} />
        <Section>
          <Container>
            <Block>
              <GridMainLayout>
                <div id="grid-main">
                  <hr />
                  <h1>
                    All posts tagged with "<span>{tag.name}</span>"
                  </h1>
                  <hr />
                  <CardGridLayout variants={container} initial="initial" animate="enter">
                    {posts.map(post => {
                      return (
                        <motion.div key={post.node.id} variants={item}>
                          <Card data={post} />
                        </motion.div>
                      );
                    })}
                  </CardGridLayout>
                  <Pagination data={pageContext} />
                </div>
                <div id="grid-aside">
                  <AsideContainer>
                    <h2>Categories</h2>
                    <TagContainer>
                      <Tags page={tag.slug}>
                        <Link to="/blog">All</Link>
                        <strong>[{totalCount}]</strong>
                      </Tags>
                      {tags.length > 0 &&
                        tags.map(item => {
                          return (
                            <Tags key={item.node.id} current={item.node.slug} page={tag.slug}>
                              <Link to={`/tag/${item.node.slug}`}>{item.node.name}</Link>
                              <strong>[{item.node.count.posts}]</strong>
                            </Tags>
                          );
                        })}
                    </TagContainer>
                    <h2>Recent Posts</h2>
                    {recent.map(post => {
                      return <MiniCard key={post.node.id} data={post} />;
                    })}
                  </AsideContainer>
                </div>
              </GridMainLayout>
            </Block>
          </Container>
        </Section>
      </Article>
    </>
  );
};

export default Tag;

Tag.propTypes = {
  data: PropTypes.shape({
    ghostTag: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
    }),
    tagCollection: PropTypes.object.isRequired,
    recentPosts: PropTypes.object.isRequired,
    allPosts: PropTypes.object.isRequired,
    allGhostPost: PropTypes.object.isRequired,
  }).isRequired,
  pageContext: PropTypes.object.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export const pageQuery = graphql`
  query GhostTagQuery($slug: String!, $limit: Int!, $skip: Int!) {
    ghostTag(slug: { eq: $slug }) {
      name
      description
      slug
    }
    allGhostPost(
      sort: { order: DESC, fields: [published_at] }
      filter: { tags: { elemMatch: { slug: { eq: $slug } } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          title
          slug
          feature_image
          localFeatureImage {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          featured
          excerpt
          updated_at
          published_at
          reading_time
          authors {
            name
            facebook
            profile_image
            slug
          }
          tags {
            name
            id
            slug
          }
        }
      }
    }
    recentPosts: allGhostPost(sort: { order: DESC, fields: [published_at] }, limit: 3) {
      edges {
        node {
          id
          title
          slug
          feature_image
          localFeatureImage {
            childImageSharp {
              fluid(maxWidth: 560) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          published_at
          updated_at
          tags {
            name
            id
            slug
          }
        }
      }
    }
    tagCollection: allGhostTag {
      edges {
        node {
          name
          slug
          id
          count {
            posts
          }
        }
      }
    }
    allPosts: allGhostPost {
      totalCount
    }
  }
`;
