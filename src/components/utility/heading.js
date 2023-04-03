/* eslint-disable import/prefer-default-export */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: ${props => props.xs};
  h1,
  h2 {
    color: ${props => props.h2Color};
    font-size: 1.75rem;
    font-weight: 600;
    line-height: 1.285714285714286;
    margin: 0 0 0.5rem 0;
  }
  span {
    color: ${props => props.pColor1};
    font-weight: 600;
    text-transform: uppercase;
    font-size: 0.875rem;
    letter-spacing: 2px;
    margin: 0;
    display: block;
  }
  p {
    color: ${props => props.pColor2};
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.714285714285714;
    margin: 0 auto 2rem;
    max-width: 400px;
  }

  @media (min-width: 600px) {
    text-align: ${props => props.sm};
    h1,
    h2 {
      font-size: 2rem;
      font-weight: 600;
      line-height: 1.25;
      margin: 0 0 0.5rem 0;
    }
  }

  @media (min-width: 960px) {
    text-align: ${props => props.md};
    h1,
    h2 {
      font-size: 2.25rem;
      font-weight: 600;
      line-height: 1.222222222222222;
      margin: 0 0 0.5rem 0;
    }
  }

  @media (min-width: 1280px) {
    text-align: ${props => props.lg};
  }

  @media (min-width: 1920px) {
    text-align: ${props => props.xl};
  }
`;

export const Heading = ({ children, xs, sm, md, lg, xl, dark }) => {
  //
  let h2Color = '#013A51';
  let pColor1 = '#000000';
  let pColor2 = '#013A51';

  if (dark) {
    h2Color = '#ffffff';
    pColor1 = '#ffffff';
    pColor2 = '#ffffff';
  }

  return (
    <>
      <Wrapper xs={xs} sm={sm} md={md} lg={lg} xl={xl} h2Color={h2Color} pColor1={pColor1} pColor2={pColor2}>
        {children}
      </Wrapper>
    </>
  );
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  xs: PropTypes.string,
  sm: PropTypes.string,
  md: PropTypes.string,
  lg: PropTypes.string,
  xl: PropTypes.string,
  dark: PropTypes.bool,
};

Heading.defaultProps = {
  xs: 'left',
  sm: 'left',
  md: 'left',
  lg: 'left',
  xl: 'left',
  dark: false,
};
