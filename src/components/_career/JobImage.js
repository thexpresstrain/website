import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const ImageSharp = styled(Img)`
  width: 100%;
  height: 100%;
`;

const QUERY = graphql`
  query {
    hero: file(sourceInstanceName: { eq: "images" }, name: { eq: "interview" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;

const JobInterview = () => {
  //
  const { hero } = useStaticQuery(QUERY);

  return (
    <>
      <ImageSharp fluid={hero.childImageSharp.fluid} />
    </>
  );
};

export default JobInterview;
