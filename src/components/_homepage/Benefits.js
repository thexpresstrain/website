import React from 'react';
import styled from 'styled-components';
import { Section, Container, Block, Heading } from '../utility';
import SVGBuild from '../svg/svg-build';
import SVGLaunch from '../svg/svg-launch';
import SVGGrow from '../svg/svg-grow';

const Wrapper = styled.div.attrs({})``;

const GridLayout = styled.div.attrs({ className: 'px-2' })`
  display: grid;
  @media (min-width: 1280px) {
    grid-template-columns: 264px 1fr;
  }
`;

const Grid2 = styled.div`
  display: grid;
  margin: 2rem auto 0;
  grid-row-gap: 2rem;
  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 56rem;
    grid-column-gap: 2rem;
  }
`;

const SubGrid = styled.div`
  display: grid;
  justify-items: center;
  text-align: center;
  max-width: 296px;
  margin: 0 auto;
  h3 {
    color: #013a51;
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.333333333333333;
    text-align: center;
    margin: 1rem 0 1rem;
  }
  p {
    max-width: 400px;
    color: #013a51;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.714285714285714;
  }
  hr {
    border: 0.5px #00af75 solid;
    width: 28px;
    margin-bottom: 0.5rem;
  }
`;

const MainBenefits = () => {
  return (
    <Wrapper>
      <Section>
        <Container>
          <Block>
            <GridLayout>
              <div>
                <Heading xs="center" sm="center" md="center">
                  <span>WHAT WE DO</span>
                  <h2>How we can help you</h2>
                  <p>
                    We help you make consistent improvements to grow your business towards success and sustainability.
                  </p>
                </Heading>
              </div>
              <div>
                <Grid2>
                  <SubGrid>
                    <SVGBuild />
                    <h3>Build</h3>
                    <hr />
                    <p>Establish and develop your business over a period of time</p>
                  </SubGrid>
                  <SubGrid>
                    <SVGLaunch />
                    <h3>Launch</h3>
                    <hr />
                    <p>Introduce your new product or service to the market for the first time</p>
                  </SubGrid>
                  <SubGrid>
                    <SVGGrow />
                    <h3>Grow</h3>
                    <hr />
                    <p>Develop and expand your business over the horizon</p>
                  </SubGrid>
                </Grid2>
              </div>
            </GridLayout>
          </Block>
        </Container>
      </Section>
    </Wrapper>
  );
};

export default MainBenefits;
