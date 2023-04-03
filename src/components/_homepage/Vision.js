import React from 'react';
import styled from 'styled-components';
import Loadable from 'react-loadable';
import { Section, Container, Block, Heading } from '../utility';
import Loading from '../primitives/Loading';
import SVGPlace from '../svg/svg-place';
import SVGTrain from '../svg/svg-train';

const VisionImage = Loadable({
  loader: () => import('./VisionImage'),
  loading: Loading,
});

const Wrapper = styled.div.attrs({})``;

const CopyLayer = styled.div`
  position: relative;
  z-index: 3;
  p {
    color: #ffffff;
  }
`;

const FilterLayer = styled.div`
  position: absolute;
  background: rgba(0, 53, 113, 0.7);
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

const GridLayout = styled.div`
  display: grid;
  justify-items: center;
  #place-svg {
    grid-area: place-svg;
  }
  #place-paragraph {
    grid-area: place-paragraph;
  }
  #train-svg {
    grid-area: train-svg;
  }
  #train-paragraph {
    grid-area: train-paragraph;
  }
  grid-template-areas:
    'place-svg'
    'place-paragraph'
    'train-svg'
    'train-paragraph';
  padding: 0 2rem;
  p {
    margin: 1.5rem 0 2.5rem;
  }

  @media (min-width: 960px) {
    max-width: 35rem;
    margin: 0 auto;
    grid-template-areas:
      'place-svg place-paragraph'
      'train-svg train-paragraph';
    #place-svg {
      padding: 2.5rem;
    }
    #place-paragraph {
      p {
        margin: 0;
      }
      align-self: center;
    }
    #train-svg {
      padding: 2.5rem;
    }
    #train-paragraph {
      p {
        margin: 0;
      }
      align-self: center;
    }
  }
`;

const Vision = () => {
  //
  return (
    <Wrapper>
      <Section>
        <ImageLayer>
          <VisionImage />
        </ImageLayer>
        <FilterLayer />
        <CopyLayer>
          <Container>
            <Block>
              <Heading Heading xs="center" sm="center" md="center" lg="center" xl="center" dark>
                <h2>Our Vision</h2>
                <p>To be the top Venture Builder in ASEAN</p>
              </Heading>
              <GridLayout>
                <div id="place-svg">
                  <SVGPlace />
                </div>
                <div id="place-paragraph">
                  <p>
                    Be “the place to go” for a wide range of business services and facilities. To create jobs and a
                    vibrant ecosystem for entrepreneurs in Iskandar Puteri.
                  </p>
                </div>
                <div id="train-svg">
                  <SVGTrain />
                </div>
                <div id="train-paragraph">
                  <p>
                    Set up satellite studios in all the major KTM railway stations in Malaysia and to link the different
                    studios by regular inter-city chartered Beer Trains (but without the beer). This will help to
                    connect entrepreneurs and investors as well as to enliven once beautiful, but now derelict and
                    unused, heritage colonial railway buildings.
                  </p>
                </div>
              </GridLayout>
            </Block>
          </Container>
        </CopyLayer>
      </Section>
    </Wrapper>
  );
};

export default Vision;
