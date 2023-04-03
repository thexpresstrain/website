import React from 'react';
import { navigate } from 'gatsby';
import styled from 'styled-components';
import { Container } from '../utility';
import { HeroButton as Button } from '../primitives/Buttons';

const Wrapper = styled.div`
  position: absolute;
  z-index: 49;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  color: #ffffff;
  width: 100%;
  height: 100%;
`;

const GridLayout = styled.h1`
  color: #fff;
  #a {
    grid-area: a;
    font-size: 1.5rem;
    font-weight: 900;
    text-shadow: 2px 2px #013a51;
    margin-bottom: 1rem;
  }
  #b {
    grid-area: b;
    font-size: 2.5rem;
    font-weight: 900;
    text-shadow: 2px 2px #013a51;
    line-height: 1;
    text-align: center;
    div:nth-child(2) {
      font-size: 2rem;
    }
    display: grid;
    justify-items: center;
    margin-bottom: 1rem;
  }
  #c {
    grid-area: c;
    font-size: 1.5rem;
    font-weight: 900;
    text-shadow: 2px 2px #013a51;
    margin-bottom: 2rem;
  }
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  align-content: center;

  grid-template-columns: 1fr;
  grid-template-areas:
    'a'
    'b'
    'c';
  justify-items: center;

  @media (min-width: 720px) {
    #b {
      font-size: 3.75rem;
    }
  }

  @media (min-width: 960px) {
    #b {
      font-size: 4.25rem;
      letter-spacing: 4px;
    }
  }

  @media (min-width: 1280px) {
    #a,
    #c {
      font-size: 1.5rem;
    }
    #b {
      font-size: 5rem;
      letter-spacing: 8px;
    }
    #c {
      margin-bottom: 4rem;
    }
  }
`;

const HeroCTA = () => {
  //
  return (
    <Wrapper>
      <Container>
        <GridLayout>
          <span id="a">We help you</span>
          <span id="b">
            <h1>
              Build, Launch
              <br />&<br />
              Grow
            </h1>
          </span>
          <span id="c">your products and ideas</span>
          <span>
            <Button
              onClick={() => {
                navigate('/contact');
              }}
            >
              Contact Us
            </Button>
          </span>
        </GridLayout>
      </Container>
    </Wrapper>
  );
};

export default HeroCTA;
