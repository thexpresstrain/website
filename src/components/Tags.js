import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

const Wrapper = styled.section``;

const Tag = styled.span`
  font-size: 0.75rem;
  line-height: 2.166666666666667;
  text-transform: uppercase;
  font-weight: 500;
  color: #ea088c;
`;

const QUERY = graphql`
  query {
    tags: allGhostTag {
      edges {
        node {
          name
          slug
          id
        }
      }
    }
  }
`;

const Tags = () => {
  //
  const {
    tags: { edges: tags },
  } = useStaticQuery(QUERY);

  return (
    <Wrapper>
      <Tag>Topics</Tag>
      {tags.map(tag => {
        return (
          <span key={tag.node.id}>
            <Link to={`/tag/${tag.node.slug}`}>{tag.node.name}</Link>
          </span>
        );
      })}
    </Wrapper>
  );
};

export default Tags;
