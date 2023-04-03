/* eslint-disable react/no-array-index-key */

import React from 'react';
import PropTypes from 'prop-types';
import tw from 'tailwind.macro';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Loadable from 'react-loadable';
import { Section, Container, Block, Heading } from '../utility';
import Loading from '../primitives/Loading';

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const QUERY = graphql`
  query {
    jobPostings: allSanityJobPosting {
      edges {
        node {
          id
          experience
          featureImage {
            asset {
              fluid(maxWidth: 800) {
                ...GatsbySanityImageFluid_noBase64
              }
            }
          }
          jobDescription
          jobTitle
          keySkills
          postDate
          role
        }
      }
    }
  }
`;

const Frame = styled.figure`
  width: 100%;
  min-width: 100%;
  position: relative;
  height: 400px;
  @media (min-width: 720px) {
    height: 480px;
  }
  @media (min-width: 960px) {
    height: 660px;
  }
`;

const JobImage = Loadable({
  loader: () => import('./JobImage'),
  loading: Loading,
});

const ImageSharp = styled(Img)`
  height: 100%;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 272px;
  width: 100%;
  overflow: hidden;
  div {
    position: absolute;
    padding: 0.5rem 1rem;
    background: rgba(23, 23, 33, 0.55);
    bottom: 0;
    right: 0;
    color: #fff;
    font-weight: 400;
    font-size: 12px;
  }
`;

const CardWrapper = styled.div.attrs({
  className: 'bg-gray-200 shadow rounded mb-10',
})`
  h2 {
    color: #013a51;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.333333333333333;
    margin: 0 0 1rem;
  }
  h3 {
    color: #013a51;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  span {
    max-width: 400px;
    color: #013a51;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.714285714285714;
  }
  hr {
    border: 0.5px #00af75 solid;
    margin: 1rem 0 1rem;
  }
  date {
    display: block;
    margin: 0 0 1rem;
    font-size: 0.875rem;
    font-weight: 500;
  }
  p {
    margin: 1rem auto 2rem;
    max-width: 480px;
  }
  blockquote {
    font-family: 'georgia';
    padding: 1rem 0;
    @media (min-width: 768px) {
      border-left: 8px solid #68d391;
      background: #f9f9f9;
    }
  }
  strong {
    font-size: 0.875rem;
  }
`;

const CardBodyWrapper = styled.div.attrs({})`
  padding: 2rem 1rem;
  @media (min-width: 480px) {
    padding: 2rem 2rem;
  }
  @media (min-width: 768px) {
    padding: 2rem 3rem;
  }
`;

const CardBodySkill = styled.div.attrs({
  className: 'py-2 px-4 text-white bg-gray-800 rounded mr-2 mb-1 text-sm inline-block',
})``;

export const Card = ({ data }) => {
  const { id, experience, featureImage, jobDescription, jobTitle, keySkills, postDate, role } = data.node;

  return (
    <CardWrapper id={id}>
      {featureImage && (
        <ImageContainer>
          <ImageSharp fluid={featureImage.asset.fluid} />
        </ImageContainer>
      )}
      <CardBodyWrapper>
        <span>Job Title</span>
        <h2>{jobTitle}</h2>
        <div>
          Role: <strong>{role}</strong>
        </div>
        <div>
          Experience: <strong>{experience}</strong>
        </div>
        <hr />
        <time>Posted on: {postDate}</time>
        <h3>Required Skills</h3>
        <div>
          {keySkills.map((skill, index) => {
            return <CardBodySkill key={index}>{skill}</CardBodySkill>;
          })}
        </div>
        <div className="pt-10">
          <h3>Job Description</h3>
          <blockquote>
            <p>{jobDescription}</p>
          </blockquote>
        </div>
      </CardBodyWrapper>
    </CardWrapper>
  );
};

const JobPosting = () => {
  //
  const {
    jobPostings: { edges: jobs },
  } = useStaticQuery(QUERY);

  console.log(jobs);

  return (
    <Wrapper>
      <Section>
        <Container>
          <Block>
            <Heading xs="center" sm="center" md="center" lg="center" xl="center">
              <h1>Join Us for a Rewarding Career</h1>
              {jobs.length > 0 ? <p>We Are Hiring</p> : <p>Check back here for job postings</p>}
            </Heading>
            {jobs.length > 0 ? (
              <div className="pt-10">
                {jobs.map(job => {
                  return <Card key={job.node.id} data={job} />;
                })}
              </div>
            ) : (
              <Frame>
                <JobImage />
              </Frame>
            )}
          </Block>
        </Container>
      </Section>
    </Wrapper>
  );
};

export default JobPosting;

JobPosting.propTypes = {
  //
};

JobPosting.defaultProps = {
  //
};
