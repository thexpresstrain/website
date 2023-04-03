import React from 'react';
import styled from 'styled-components';
import Loadable from 'react-loadable';
import { navigate } from 'gatsby';
import { Section, Container, Block, Heading } from '../utility';
import Loading from '../primitives/Loading';
import { HeroButton as Button } from '../primitives/Buttons';

const VentureBuilderImage = Loadable({
  loader: () => import('./VentureBuilderImage'),
  loading: Loading,
});

const Wrapper = styled.div.attrs({})``;

const CopyLayer = styled.div`
  position: relative;
  z-index: 3;
  p {
    color: #ffffff;
  }
  padding: 5rem 0;
`;

const FilterLayer = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 2;
`;

const ImageLayer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 2;
`;

const Copy = styled.div`
  max-width: 400px;
  margin: 2rem auto 0;
  text-align: center;
  color: #ffffff;
  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    margin: 0 0 3rem;
  }
  hr {
    margin: 2rem 0;
    border: 1px #68d391 solid;
  }
  li {
    text-align: left;
  }
  ul {
    padding: 0 1rem;
    display: grid;
    grid-row-gap: 2rem;
  }
  @media (min-width: 1280px) {
    ul {
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 2rem;
    }
    max-width: 900px;
  }
`;

const venturebuilder = () => {
  //
  return (
    <Wrapper name="ventureBuilder">
      <Section>
        <ImageLayer>
          <VentureBuilderImage />
        </ImageLayer>
        <FilterLayer />
        <CopyLayer>
          <Container>
            <Block>
              <Heading Heading xs="center" sm="center" md="center" lg="center" xl="center" dark>
                <span>TXT</span>
                <h2>Venture Builder</h2>
              </Heading>
              <Copy>
                <p>
                  The Xpress Train helps individuals or entrepreneurs to <strong>Build, Launch & Grow</strong> their
                  products or idea.
                </p>
                <hr />
                <h3>At The Xpress Train, we have 3 tracks of venture building:</h3>
                <ul>
                  <li>
                    The first track focuses on startups, cultivating and nurturing innovative ideas into profitable
                    ventures.
                  </li>
                  <li>
                    The second focuses on existing business, by understanding their pain points and developing solutions
                    for those pain points.
                  </li>
                  <li>
                    The third track comprises the task of working with existing businesses in order to think of and
                    develop new ways to scale them.
                  </li>
                </ul>
                <Button
                  style={{ marginTop: '5rem' }}
                  onClick={() => {
                    navigate('/contact');
                  }}
                >
                  Build, Launch & Grow
                </Button>
              </Copy>
            </Block>
          </Container>
        </CopyLayer>
      </Section>
    </Wrapper>
  );
};

export default venturebuilder;
