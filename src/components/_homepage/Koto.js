import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, useStaticQuery, graphql, Link, navigate } from 'gatsby';
import tw from 'tailwind.macro';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Section, Container, Block, Heading } from '../utility';
import { LinkButton } from '../primitives/Buttons';

const QUERY = graphql`
  query {
    logo: file(sourceInstanceName: { eq: "images" }, name: { eq: "koto" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;

const Wrapper = styled.div.attrs({})``;

const ImageSharp = styled(Img)`
  width: 100%;
  height: 100%;
`;

const LogoWrapper = styled.div`
  max-width: 320px;
  background: #ffffff;
  padding: 2rem;
  margin: 0 auto 2rem;
  @media (min-width: 960px) {
    margin: 0 0 2rem 0;
  }
`;

const ButtonWrapper = styled.div``;

const GridLayout = styled.div.attrs({ className: 'px-2 text-white' })`
  #grid-item-1 {
    grid-area: body;
    margin: 4rem auto 0;
    @media (min-width: 960px) {
      margin: 0;
    }
  }
  #grid-item-2 {
    grid-area: heading;
  }
  display: grid;
  grid-template-areas:
    'heading'
    'body';

  @media (min-width: 960px) {
    grid-template-columns: 1fr 400px;
    grid-template-areas: 'body heading';
  }
  grid-column-gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
  p {
    max-width: 380px;
    margin-bottom: 1.5rem;
  }
  ul {
    list-style-type: square;
    list-style-position: outside;
    margin: 1.5rem 2rem;
  }
`;

const Koto = () => {
  //
  const { logo } = useStaticQuery(QUERY);

  return (
    <Wrapper>
      <Section color="#44337a">
        <Container>
          <Block>
            <GridLayout>
              <div id="grid-item-1">
                <p>
                  <b>KOTO</b> is an online/offline association where members learn, know and acquire knowledge with a
                  token, teach, train and impart it on others with benefit.
                </p>
                <p>
                  <b>KOTO Association</b> is a social enterprise business model. Non-commercial benefit association.
                </p>
                <div>
                  The association is in three folds
                  <br />
                  <ul>
                    <li>
                      <b>KOTO</b> Venture builder Association,
                    </li>
                    <li>
                      <b>KOTO</b> Makers Association, and
                    </li>
                    <li>
                      <b>KOTO</b> Sport Association
                    </li>
                  </ul>
                </div>
              </div>
              <div id="grid-item-2">
                <Heading xs="center" sm="center" md="left" dark>
                  <h2>KOTO Association</h2>
                  <p>Another community project by The Xpress Train</p>
                  <LogoWrapper>
                    <ImageSharp fluid={logo.childImageSharp.fluid} />
                  </LogoWrapper>
                  <ButtonWrapper>
                    <LinkButton href="http://koto.thexpresstrain.com" target="_blank" rel="noopener noreferrer">
                      Goto KOTO
                    </LinkButton>
                  </ButtonWrapper>
                </Heading>
              </div>
            </GridLayout>
          </Block>
        </Container>
      </Section>
    </Wrapper>
  );
};

export default Koto;

Koto.propTypes = {
  //
};

Koto.defaultProps = {
  //
};
