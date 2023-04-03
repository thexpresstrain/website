import React from 'react';
import styled from 'styled-components';
import Loadable from 'react-loadable';
import Loading from '../primitives/Loading';

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

const HeroImage = Loadable({
  loader: () => import('./HeroImage'),
  loading: Loading,
});

const HeroCTA = Loadable({
  loader: () => import('./HeroCTA'),
  loading: Loading,
});

const Hero = () => {
  //
  return (
    <Frame>
      <HeroCTA />
      <HeroImage />
    </Frame>
  );
};

export default Hero;
