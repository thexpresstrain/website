import React from 'react';
import styled from 'styled-components';
import { Section, Container, Block, Heading } from '../utility';
import SVGComputer from '../svg/svg-computer';
import SVGTarget from '../svg/svg-target';
import SVGNetwork from '../svg/svg-network';
import SVGIot from '../svg/svg-iot';
import SVGChart from '../svg/svg-chart';

const Wrapper = styled.div.attrs({})`
  margin: 0 1rem;
`;

const Grid0 = styled.div`
  #grid1 {
    grid-area: grid1;
  }
  #grid2 {
    grid-area: grid2;
    div {
      margin-top: 1.5rem;
    }
  }
  margin: 4rem auto 0;
  display: grid;
  max-width: 980px;
  grid-template-columns: 1fr;
  grid-row-gap: 2rem;
  grid-template-areas:
    'grid1'
    'grid2';
  justify-items: center;
  @media (min-width: 1280px) {
    grid-template-columns: 544px 1fr;
    grid-template-areas: 'grid2 grid1';
  }
  p {
    margin-bottom: 1.5rem;
  }
  h3 {
    margin: 1rem 0 2rem;
    font-size: 0.875rem;
    font-weight: 600;
    @media (min-width: 600px) {
      font-size: 1rem;
    }
  }
`;

const Grid1 = styled.div`
  display: grid;
  max-width: 424px;
  grid-template-columns: 1fr;
  justify-items: center;
  @media (min-width: 600px) {
    grid-template-columns: 80px 1fr;
    p {
      margin: 0;
    }
    align-items: center;
    justify-items: start;
    margin: 0 0 2rem 0;
  }
`;

const Grid2 = styled.div`
  display: grid;
  max-width: 544px;
  grid-template-columns: 1fr;
  justify-items: center;
  @media (min-width: 600px) {
    grid-template-columns: 192px 1fr;
    align-items: center;
    justify-items: start;
    svg {
      height: 392px;
    }
  }
`;

const Mission = () => {
  //
  return (
    <Wrapper>
      <Section color="#ffffff">
        <Container>
          <Block>
            <Heading Heading xs="center" sm="center" md="center" lg="center" xl="center">
              <h2>Our Mission</h2>
            </Heading>
            <Grid0>
              <div id="grid1">
                <Grid1>
                  <SVGComputer />
                  <h3>Software & Hardware development</h3>
                </Grid1>
                <Grid1>
                  <SVGTarget />
                  <h3>Digital & Social Media marketing</h3>
                </Grid1>
                <Grid1>
                  <SVGNetwork />
                  <h3>Blockchain & ICO consultancy</h3>
                </Grid1>
                <Grid1>
                  <SVGIot />
                  <h3>AI & IOT solutions</h3>
                </Grid1>
              </div>
              <Grid2 id="grid2">
                <SVGChart />
                <div>
                  <p>
                    To help our customers Build, Launch & Grow their ideas or products and to build an offline & online
                    ecosystem that re-defines the way our customers live, learn, work and play.
                  </p>
                </div>
              </Grid2>
            </Grid0>
          </Block>
        </Container>
      </Section>
    </Wrapper>
  );
};

export default Mission;
