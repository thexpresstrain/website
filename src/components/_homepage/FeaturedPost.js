import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { Section, Container, Block, Heading } from '../utility';
import Card from '../PostCard';

const QUERY = graphql`
  query {
    allPosts: allGhostPost(limit: 3, sort: { fields: published_at, order: DESC }) {
      edges {
        node {
          id
          title
          slug
          feature_image
          localFeatureImage {
            childImageSharp {
              fluid(maxWidth: 560) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          localProfileImage {
            childImageSharp {
              fluid(maxWidth: 40) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          featured
          excerpt
          published_at
          updated_at
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
  }
`;

const Wrapper = styled.div.attrs({})``;

const GridLayout = styled.div`
  display: grid;
  margin: 0 auto;
  grid-row-gap: 1rem;
  max-width: 360px;
  @media (min-width: 1000px) {
    max-width: 1128px;
    grid-column-gap: 1.5rem;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const FeaturedPost = () => {
  //
  const {
    allPosts: { edges: posts },
  } = useStaticQuery(QUERY);

  return (
    <Wrapper>
      <Section color="#e2e8f0">
        <Container>
          <Block>
            <Heading Heading xs="center" sm="center" md="center" lg="center" xl="center">
              <span>Latest Posts</span>
              <h2>TXT Blog</h2>
              <p>Explore more curated content in our blog section</p>
            </Heading>
            <GridLayout>
              {posts.map(post => {
                return (
                  <div key={post.node.id}>
                    <Card data={post} />
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

export default FeaturedPost;
