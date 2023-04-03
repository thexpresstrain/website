import React from 'react';
import styled from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Section, Container, Block, Heading } from './utility';

const QUERY = graphql`
  query {
    teamMember: allSanityTeam(sort: { fields: order }) {
      edges {
        node {
          id
          name
          slug {
            current
          }
        }
      }
    }
    authors: allGhostAuthor(sort: { fields: name }) {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
    career: allSanityJobPosting(sort: { fields: jobTitle }) {
      edges {
        node {
          id
          jobTitle
        }
      }
    }
    allPosts: allGhostPost(sort: { fields: updated_at }) {
      edges {
        node {
          id
          slug
          title
        }
      }
    }
  }
`;

const Wrapper = styled.div.attrs({})`
  max-width: 600px;
  margin: 0 auto;
  h2 {
    font-size: 1.125rem;
    margin-bottom: 1rem;
  }
  hr {
    border: 1px #68d391 solid;
    margin: 2rem 0;
  }
`;

const LinkWrapper = styled.div`
  ul {
    list-style-type: square;
    list-style-position: inside;
  }
  li {
    margin-bottom: 0.5rem;
  }
  a {
    display: inline-block;
    color: #1a202c;
    font-size: 0.875rem;
    font-weight: 600;
    transition: all 0.2s ease-in-out;
    border-bottom: 2px #ffffff solid;
    :hover {
      color: #000000;
      border-bottom: 2px #2a4365 solid;
    }
  }
`;

const Sitemap = () => {
  //
  const {
    teamMember: { edges: team },
    authors: { edges: writers },
    career: { edges: jobs },
    allPosts: {edges: posts}
  } = useStaticQuery(QUERY);

  return (
    <Wrapper>
      <Section>
        <Container>
          <Block>
            <Heading>
              <span>TXT</span>
              <h1>Site Map</h1>
              <hr />
              <h2>Main Pages</h2>
              <LinkWrapper>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/#ventureBuilder">Venture Builder</Link>
                  </li>
                  <li>
                    <Link to="/coworking">TXT Hub</Link>
                  </li>
                  <li>
                    <Link to="/txt">TXT Team</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/career">Career</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/privacy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/terms">Terms of Use</Link>
                  </li>
                  <li>
                    <Link to="/cookies">Cookie Policy</Link>
                  </li>
                </ul>
              </LinkWrapper>
              <hr />
              <h2>TXT Team</h2>
              <LinkWrapper>
                <ul>
                  {team.map(person => {
                    return (
                      <li key={person.node.id}>
                        <Link to={`/team/${person.node.slug.current}`}>{person.node.name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </LinkWrapper>
              <hr />
              <h2>TXT Writers</h2>
              <LinkWrapper>
                <ul>
                  {writers.map(writer => {
                    return (
                      <li key={writer.node.id}>
                        <Link to={`/writer/${writer.node.slug}`}>{writer.node.name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </LinkWrapper>
              <hr />
              <h2>Career</h2>
              <LinkWrapper>
                <ul>
                  {jobs.map(job => {
                    return (
                      <li key={job.node.id}>
                        <Link to={`/career/#${job.node.id}`}>{job.node.jobTitle}</Link>
                      </li>
                    );
                  })}
                </ul>
              </LinkWrapper>
              <hr />
              <h2>Blog Posts</h2>
              <LinkWrapper>
                <ul>
                  {posts.map(post => {
                    return (
                      <li key={post.node.id}>
                        <Link to={`/blog/${post.node.slug}`}>{post.node.title}</Link>
                      </li>
                    );
                  })}
                </ul>
              </LinkWrapper>
            </Heading>
          </Block>
        </Container>
      </Section>
    </Wrapper>
  );
};

export default Sitemap;
