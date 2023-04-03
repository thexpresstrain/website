import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import Card from '../components/PostCard';
import Pagination from '../components/Pagination';
import SEO from '../components/Seo';
import { Section, Container, Block } from '../components/utility';
import MiniCard from '../components/MiniPostCard';

const pageTransition = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
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

const CardGridLayout = styled.div`
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
  span {
    display: block;
    margin-bottom: 0.5rem;
  }
  a {
    background: #2a4365;
    color: #ffffff;
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

const Bio = styled.span`
  a {
    background: #2a4365;
    color: #ffffff;
    padding: 0.25rem 1rem;
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1.714285714285714;
    border-radius: 4px;
    margin-left: 0.5rem;
  }
`;

const Author = ({ data, pageContext, location: { pathname } }) => {
  //
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

  const {
    ghostAuthor: { name },
    ghostAuthor: { slug },
  } = data;

  return (
    <>
      <Article key={pathname} initial="initial" animate="enter" exit="exit" variants={pageTransition}>
        <SEO title={`All posts by ${name}`} description={`All posts by ${name}`} />
        <Section>
          <Container>
            <Block>
              <GridMainLayout>
                <div id="grid-main">
                  <hr />
                  <h1>
                    All posts by "<span>{name}</span>"
                    <Bio>
                      <Link to={`/writer/${slug}`}>Bio</Link>
                    </Bio>
                  </h1>
                  <hr />
                  <CardGridLayout>
                    {posts.map(post => {
                      return <Card data={post} key={post.node.id} />;
                    })}
                  </CardGridLayout>
                  <Pagination data={pageContext} />
                </div>
                <div id="grid-aside">
                  <AsideContainer>
                    <h2>Categories</h2>
                    <TagContainer>
                      <span>
                        <Link to="/blog">All</Link>
                        <strong>[{totalCount}]</strong>
                      </span>
                      {tags.length > 0 &&
                        tags.map(item => {
                          return (
                            <span key={item.node.id} current={item.node.slug}>
                              <Link to={`/tag/${item.node.slug}`}>{item.node.name}</Link>
                              <strong>[{item.node.count.posts}]</strong>
                            </span>
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

export default Author;

Author.propTypes = {
  data: PropTypes.shape({
    ghostAuthor: PropTypes.shape({
      name: PropTypes.string.isRequired,
      cover_image: PropTypes.string,
      profile_image: PropTypes.string,
      website: PropTypes.string,
      bio: PropTypes.string,
      location: PropTypes.string,
      facebook: PropTypes.string,
      twitter: PropTypes.string,
    }),
    allGhostPost: PropTypes.object.isRequired,
  }).isRequired,
  pageContext: PropTypes.object.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export const pageQuery = graphql`
  query GhostAuthorQuery($slug: String!, $limit: Int!, $skip: Int!) {
    ghostAuthor(slug: { eq: $slug }) {
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
    }
    allGhostPost(
      sort: { order: DESC, fields: [published_at] }
      filter: { authors: { elemMatch: { slug: { eq: $slug } } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          slug
          title
          feature_image
          localFeatureImage {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          authors {
            facebook
            id
            name
            profile_image
            slug
          }
          excerpt
          updated_at
          reading_time
          featured
          tags {
            name
            id
            slug
          }
        }
      }
    }
    recentPosts: allGhostPost(sort: { order: DESC, fields: [updated_at] }, limit: 3) {
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
